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
/// Description : EMS Lookup APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class EMSLookupController : ApiController
    {
        private ffrDevEntities db = new ffrDevEntities();

        // GET: api/EMSLookup
        [Route("api/Lookup/Units")]
        public IHttpActionResult GetUnits()
        {
            var result = db.CodeFrdUnits.Select(u => new {
                u.Id,
                u.Unit,
                u.WorkGroupId,
                u.WorkGroupAbbrv
            }).Distinct().OrderBy(u => u.Unit).ToList();

            return Ok(result);
        }

        // GET: api/EMSLookup
        [Route("api/Lookup/Locations")]
        public IHttpActionResult GetLocations()
        {
            var result = db.CodeVFrdWorkGroupWBattalions.Where(w => w.IsHistory == false).Select(w => new {
                w.Id,
                w.WorkGroupAbbrv,
                w.WorkGroupName,
                w.battalion
            }).Distinct().OrderBy(w => w.WorkGroupName).ToList();

            return Ok(result);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CodeFrdUnitExists(int id)
        {
            return db.CodeFrdUnits.Count(e => e.Id == id) > 0;
        }
    }
}