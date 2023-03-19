using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EMSApi.Models;

/// <summary>
/// Author      : Min Kim
/// Date        : 8/3/2022
/// Description : EMS Complaint APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class EMSComplaintController : ApiController
    {
        private ffrDevEntities db = new ffrDevEntities();

        
        // GET: api/EMSComplaint
        public IHttpActionResult GetEMSComplaints()
        {
            var result = db.EMSVComplaints.OrderBy(c => c.ComplaintId).ThenBy(c => c.ComplaintDetail).ToList();
            return Ok(result);
        }

        // GET:api/EMSComplaintById?Id=x
        [HttpGet]
        [Route("api/EMSComplaintById")]
        public IHttpActionResult EMSComplaintsById(int id)
        {
            var result = db.EMSVComplaints.Find(id);
            ComplaintDto complaintDto = new ComplaintDto();
            complaintDto.EMSComplaint = result;
            complaintDto.EMSNotes = db.EMSNotes.Where(n => n.ComplaintId != null && n.ComplaintId == id).ToList();
            complaintDto.EMSSupplementalDocs = db.EMSSupplementalDOCs.Where(s => s.ComplaintId != null && s.ComplaintId == id).ToList();

            if (complaintDto.EMSComplaint != null && complaintDto.EMSComplaint.ComplaintId > 0)
                return Ok(complaintDto);
            return NotFound();
        }

        // GET:api/EMSVComplaintById?Id=x
        [HttpGet]
        [Route("api/EMSVComplaintById")]
        public IHttpActionResult EMSVComplaintsById(int id)
        {
            var result = db.EMSVComplaints.Find(id);

            if (result != null && result.ComplaintId > 0)
                return Ok(result);
            return NotFound();
        }


        //POST: api/EMSComplaint/Search
        [HttpPost]
        [Route("api/EMSComplaint/Search")]
        public IHttpActionResult SearchEMSComplaints(SearchEMS searchEMS)
        {
            var result = db.EMSVComplaints.OrderBy(c => c.ComplaintId).ThenBy(c => c.ComplaintDetail).ToList();
            if (searchEMS.CategoryId > 0)
                result = result.Where(r => r.CategoryId != null && r.CategoryId == searchEMS.CategoryId).ToList();
            if (searchEMS.SubCategoryId > 0)
                result = result.Where(r => r.SubCategoryId != null && r.SubCategoryId == searchEMS.SubCategoryId).ToList();
            if (!string.IsNullOrEmpty(searchEMS.Location))
                result = result.Where(r => r.Location != null && r.Location.ToUpper() == searchEMS.Location.ToUpper()).ToList();
            if (!string.IsNullOrEmpty(searchEMS.Unit))
                result = result.Where(r => r.Unit != null && r.Unit == searchEMS.Unit.ToString()).ToList();
            if (!string.IsNullOrEmpty(searchEMS.ReportStatus))
                result = result.Where(r => r.ComplaintStatus != null && r.ComplaintStatus.ToUpper() == searchEMS.ReportStatus.ToUpper()).ToList();
            if (searchEMS.ReviewedStartDate != null)
                result = result.Where(r => r.RequestDate != null && r.RequestDate >= searchEMS.ReviewedStartDate).ToList();
            if (searchEMS.ReviewedEndDate != null)
                result = result.Where(r => r.RequestDate != null && r.RequestDate <= searchEMS.ReviewedEndDate).ToList();

            if (result != null && result.Count > 0)
            {
                if (!string.IsNullOrEmpty(searchEMS.SortBy))
                {
                    switch (searchEMS.SortBy)
                    {
                        case "Submitter":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.SubmitterName).ThenByDescending(r=>r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.SubmitterName).ThenByDescending(r => r.CreatedDate));
                        case "Category":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.CategoryDesc).ThenByDescending(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.CategoryDesc).ThenByDescending(r => r.CreatedDate));
                        case "SubCategory":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.SubCategoryDesc).ThenByDescending(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.SubCategoryDesc).ThenByDescending(r => r.CreatedDate));
                        case "Submit Date":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.CreatedDate));
                        case "Location":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.WorkGroupName).ThenByDescending(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.WorkGroupName).ThenByDescending(r => r.CreatedDate));
                        case "Unit":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.UnitName).ThenByDescending(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.UnitName).ThenByDescending(r => r.CreatedDate));
                        case "Status":
                            if (searchEMS.SortOrder != null && searchEMS.SortOrder == "Ascending")
                                return Ok(result.OrderBy(r => r.ComplaintStatus).ThenByDescending(r => r.CreatedDate));
                            else
                                return Ok(result.OrderByDescending(r => r.ComplaintStatus).ThenByDescending(r => r.CreatedDate));
                    }
                }

                return Ok(result.OrderByDescending(r => r.CreatedDate).ThenBy(r => r.SubmitterName));
            }

            return NotFound();
        }

        // GET: api/EMSComplaint/5
        [ResponseType(typeof(EMSComplaint))]
        public IHttpActionResult GetEMSComplaint(int id)
        {
            EMSComplaint eMSComplaint = db.EMSComplaints.Find(id);
            if (eMSComplaint == null)
            {
                return NotFound();
            }

            return Ok(eMSComplaint);
        }

        // POST: api/Complaing/Serach


        // POST: api/Complaint/UPdate
        [HttpPost]
        [Route("api/Complaint/Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateComplaint(EMSComplaint eMSComplaint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!EMSComplaintExists(eMSComplaint.ComplaintId))
            {
                return NotFound();
            }

            db.Entry(eMSComplaint).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok(eMSComplaint);
        }

        // POST: api/Complaint/Insert
        [HttpPost]
        [Route("api/Complaint/Insert")]
        [ResponseType(typeof(EMSComplaint))]
        public IHttpActionResult InsertComplaint(EMSComplaint eMSComplaint)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMSComplaints.Add(eMSComplaint);
            db.SaveChanges();

            return Ok(eMSComplaint);
        }

        // POST: api/Complaint/Delete
        [HttpPost]
        [Route("api/Complaint/Delete")]
        [ResponseType(typeof(EMSComplaint))]
        public IHttpActionResult DeleteComplaint(DelDto delDto)
        {
            EMSComplaint eMSComplaint = db.EMSComplaints.Find(delDto.Id);
            if (eMSComplaint == null)
            {
                return NotFound();
            }

            deleteRelatedData(delDto.Id);
            db.EMSComplaints.Remove(eMSComplaint);
            db.SaveChanges();

            return Ok(eMSComplaint);
        }

        private void deleteRelatedData(int ComplaintId)
        {
            var notes = db.EMSNotes.Where(n => n.ComplaintId == ComplaintId).ToList();
            var supplementalDocs = db.EMSSupplementalDOCs.Where(s => s.ComplaintId == ComplaintId).ToList();
            if (notes != null)
                db.EMSNotes.RemoveRange(notes);
            if (supplementalDocs != null)
                db.EMSSupplementalDOCs.RemoveRange(supplementalDocs);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EMSComplaintExists(int id)
        {
            return db.EMSComplaints.Count(e => e.ComplaintId == id) > 0;
        }
    }
}