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
/// Description : EMS Category APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class EMSCategoryController : ApiController
    {
        private ffrDevEntities db = new ffrDevEntities();

        // GET: api/EMSCategory
        public IHttpActionResult GetEMSCategories()
        {
            var result = db.EMSVCategories.OrderBy(c=>c.CategoryType).ThenBy(c=>c.ParentDesc).ThenBy(c=> c.CategoryDesc).ToList();
            return Ok(result);
        }

        // GET: api/EMSCategory?type=xxxxx
        [Route("api/EMSCategoryByType")]
        public IHttpActionResult GetEMSSubCategoryByType(string type)
        {
            var result = db.EMSCategories.Where(c=> c.CategoryType.ToUpper() == type.ToUpper() && c.IsActive != null && c.IsActive == true).OrderBy(c => c.CategoryDesc).ToList();
            return Ok(result);
        }


        // GET: api/EMSCategory?type=xxxxx
        [Route("api/EMSSubCategoryById")]
        public IHttpActionResult GetEMSSubCategoryById(int id)
        {
            var result = db.EMSCategories.Where(c => c.ParentId != null && c.ParentId == id).OrderBy(c => c.CategoryDesc).ToList();
            return Ok(result);
        }


        // GET: api/EMSCategory/5
        [ResponseType(typeof(EMSCategory))]
        public IHttpActionResult GetEMSCategory(int id)
        {
            EMSCategory eMSCategory = db.EMSCategories.Find(id);
            if (eMSCategory == null)
            {
                return NotFound();
            }

            return Ok(eMSCategory);
        }

        // POST: api/Category/UPdate
        [HttpPost]
        [Route("api/Category/Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdatCategory(EMSCategory eMSCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!EMSCategoryExists(eMSCategory.CategoryId))
            {
                return NotFound();
            }

            db.Entry(eMSCategory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok(eMSCategory);
        }

        // POST: api/Category/Insert
        [HttpPost]
        [Route("api/Category/Insert")]
        [ResponseType(typeof(EMSCategory))]
        public IHttpActionResult InsertCategory(EMSCategory eMSCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMSCategories.Add(eMSCategory);
            db.SaveChanges();

            return Ok(eMSCategory);
        }

        // POST: api/Category/Delete
        [HttpPost]
        [Route("api/Category/Delete")]
        [ResponseType(typeof(EMSCategory))]
        public IHttpActionResult DeleteCategory(DelDto delDto)
        {
            EMSCategory eMSCategory = db.EMSCategories.Find(delDto.Id);
            if (eMSCategory == null)
            {
                return NotFound();
            }

            db.EMSCategories.Remove(eMSCategory);
            db.SaveChanges();

            return Ok(eMSCategory);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EMSCategoryExists(int id)
        {
            return db.EMSCategories.Count(e => e.CategoryId == id) > 0;
        }
    }
}