using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using EMSApi.Models;

/// <summary>
/// Author      : Min Kim
/// Date        : 8/3/2022
/// Description : EMS Supplemental Docs APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class EMSSupplementalDOCController : ApiController
    {
        private ffrDevEntities db = new ffrDevEntities();

        // GET: api/EMSSupplementalDOC
        public IHttpActionResult GetEMSSupplementalDOCs()
        {
            var result = db.EMSSupplementalDOCs.OrderBy(c => c.DocId).ThenBy(c => c.DocName).ToList();
            return Ok(result);
        }

        // GET: api/EMSSupplementalDOC/5
        [ResponseType(typeof(EMSSupplementalDOC))]
        public IHttpActionResult GetEMSSupplementalDOC(int id)
        {
            EMSSupplementalDOC eMSSupplementalDOC = db.EMSSupplementalDOCs.Find(id);
            if (eMSSupplementalDOC == null)
            {
                return NotFound();
            }

            return Ok(eMSSupplementalDOC);
        }

        // GET: api/EMSSupplementalDoc?ComplaintId=0
        [HttpGet]
        [Route("api/EMSSupplementalDocByComplaintId")]
        public IHttpActionResult GetEMSSupplementalDOCByComplaintId(int complaintId)
        {
            var result = db.EMSSupplementalDOCs.Where(s=>s.ComplaintId == complaintId).ToList();

            if (result == null && result.Count < 1)
            {
                return NotFound();
            }

            return Ok(result);
        }

        // POST: api/SupplementalDOC/UPdate
        [HttpPost]
        [Route("api/SupplementalDoc/Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateSupplementalDoc()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var request = HttpContext.Current.Request;
            int id = int.Parse(request.Form["Id"]);
            EMSSupplementalDOC doc = db.EMSSupplementalDOCs.Find(id);

            if (EMSSupplementalDOCExists(id))
            {
                if (request.Files.Count > 0)
                {
                    var file = request.Files[0];
                    if (file != null && !string.IsNullOrEmpty(file.FileName))
                    {
                        doc.DocName = file.FileName;

                        doc.DocExt = doc.DocName.Substring(doc.DocName.LastIndexOf(".") + 1);
                        switch (doc.DocExt)
                        {
                            case "pdf":
                                doc.DocType = "PDF";
                                break;
                            case "xls":
                                doc.DocType = "Excel";
                                break;
                            case "xlsx":
                                doc.DocType = "Excel";
                                break;
                            case "doc":
                                doc.DocType = "Word";
                                break;
                            case "docx":
                                doc.DocType = "Word";
                                break;
                            case "jpg":
                                doc.DocType = "Image";
                                break;
                            case "jpeg":
                                doc.DocType = "Image";
                                break;
                            case "png":
                                doc.DocType = "Image";
                                break;
                            case "m4a":
                                doc.DocType = "Audio";
                                break;
                            default:
                                return StatusCode(HttpStatusCode.BadRequest);
                        }
                        doc.DocDesc = request.Form["Description"];
                        doc.DocDescOther = request.Form["DescriptionOther"];
                        doc.UpdatedBy = request.Form["userId"];
                        doc.UpdatedDate = DateTime.Now;


                        var fileStream = new MemoryStream();
                        if (doc.DocType == "Image")
                        {
                            fileStream = ScaleImage(file, 600, 800, doc.DocExt);
                        }
                        else
                            file.InputStream.CopyTo(fileStream);
                        doc.Doc = fileStream.ToArray();
                        fileStream.Dispose();

                        try
                        {
                            db.SaveChanges();
                            return Ok(doc);
                        }
                        catch (Exception ex)
                        {
                            return StatusCode(HttpStatusCode.BadRequest);
                        }
                    }
                    else
                        return StatusCode(HttpStatusCode.BadRequest);
                }
                else if (!string.IsNullOrEmpty(request.Form["Description"]))
                {
                    doc.DocDesc = request.Form["Description"];
                    doc.DocDescOther = request.Form["DescriptionOther"];
                    doc.UpdatedBy = request.Form["userId"];
                    doc.UpdatedDate = DateTime.Now;
                    try
                    {
                        db.SaveChanges();
                        return Ok(doc);
                    }
                    catch (Exception ex)
                    {
                        return StatusCode(HttpStatusCode.BadRequest);
                    }
                }
                else
                    return StatusCode(HttpStatusCode.BadRequest);
            }
            else
                return NotFound();
        }

        // POST: api/SupplementalDOC/Insert
        [HttpPost]
        [Route("api/SupplementalDoc/Insert")]
        [ResponseType(typeof(EMSSupplementalDOC))]
        public IHttpActionResult InsertSupplementalDoc()
        {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }

            var request = HttpContext.Current.Request;
            if (request.Files.Count > 0)
            {
                for (int i = 0; i < request.Files.Count; i++)
                {
                    EMSSupplementalDOC doc = new EMSSupplementalDOC();
                    var file = request.Files[i];
                    if (file != null && !string.IsNullOrEmpty(file.FileName))
                    {
                        doc.DocName = file.FileName;

                        doc.DocExt = doc.DocName.Substring(doc.DocName.LastIndexOf(".") + 1);
                        switch (doc.DocExt.ToLower())
                        {
                            case "pdf":
                                doc.DocType = "PDF";
                                break;
                            case "xls":
                                doc.DocType = "Excel";
                                break;
                            case "xlsx":
                                doc.DocType = "Excel";
                                break;
                            case "doc":
                                doc.DocType = "Word";
                                break;
                            case "docx":
                                doc.DocType = "Word";
                                break;
                            case "jpg":
                                doc.DocType = "Image";
                                break;
                            case "jpeg":
                                doc.DocType = "Image";
                                break;
                            case "png":
                                doc.DocType = "Image";
                                break;
                            case "m4a":
                                doc.DocType = "Audio";
                                break;
                            default:
                                return StatusCode(HttpStatusCode.BadRequest);
                        }
                        doc.ComplaintId = int.Parse(request.Form["ComplaintId"]);
                        doc.DocDesc = request.Form["Description"];
                        doc.DocDescOther = request.Form["DescriptionOther"];
                        doc.CreatedBy = request.Form["userId"];
                        doc.CreatedDate = DateTime.Now;
                        doc.UpdatedBy = request.Form["userId"];
                        doc.UpdatedDate = DateTime.Now;

                        var fileStream = new MemoryStream();
                        if (doc.DocType == "Image")
                        {
                            fileStream = ScaleImage(file, 1024, 768, doc.DocExt);
                        }
                        else
                            file.InputStream.CopyTo(fileStream);
                        doc.Doc = fileStream.ToArray();
                        fileStream.Dispose();

                        db.EMSSupplementalDOCs.Add(doc);
                        try
                        {
                            db.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            return StatusCode(HttpStatusCode.BadRequest);
                        }
                    }
                }
                return Ok();
            }
            else
                return StatusCode(HttpStatusCode.BadRequest);
        }

        // POST: api/SupplementalDOC/Delete
        [HttpPost]
        [Route("api/SupplementalDoc/Delete")]
        [ResponseType(typeof(EMSSupplementalDOC))]
        public IHttpActionResult DeleteSupplementalDOC(DelDto delDto)
        {
            EMSSupplementalDOC eMSSupplementalDOC = db.EMSSupplementalDOCs.Find(delDto.Id);
            if (eMSSupplementalDOC == null)
            {
                return NotFound();
            }

            db.EMSSupplementalDOCs.Remove(eMSSupplementalDOC);
            db.SaveChanges();

            return Ok(eMSSupplementalDOC);
        }

        private MemoryStream ScaleImage(HttpPostedFile file, int maxWidth, int maxHeight, string docExt)
        {
            using (var fileStream = new MemoryStream())
            {
                file.InputStream.CopyTo(fileStream);

                var image = Image.FromStream(fileStream);

                var ratioX = (double)maxWidth / image.Width;
                var ratioY = (double)maxHeight / image.Height;
                var ratio = Math.Min(ratioX, ratioY);

                var newWidth = (int)(image.Width * ratio);
                var newHeight = (int)(image.Height * ratio);

                var newImage = new Bitmap(newWidth, newHeight);

                using (var graphics = Graphics.FromImage(newImage))
                    graphics.DrawImage(image, 0, 0, newWidth, newHeight);

                using (var newStream = new MemoryStream())
                {
                    if (docExt.ToLower() == "jpg")
                        newImage.Save(newStream, System.Drawing.Imaging.ImageFormat.Jpeg);
                    else if (docExt.ToLower() == "jpeg")
                        newImage.Save(newStream, System.Drawing.Imaging.ImageFormat.Jpeg);
                    else if (docExt.ToLower() == "png")
                        newImage.Save(newStream, System.Drawing.Imaging.ImageFormat.Png);
                    return newStream;
                }
            }

            return null;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EMSSupplementalDOCExists(int id)
        {
            return db.EMSSupplementalDOCs.Count(e => e.DocId == id) > 0;
        }
    }
}