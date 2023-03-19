using EMSApi.Models;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;

/// <summary>
/// Author      : Min Kim
/// Date        : 8/3/2022
/// Description : EMS Note APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class EMSNoteController : ApiController
    {
        private ffrDevEntities db = new ffrDevEntities();


        // GET: api/Note
        public IHttpActionResult GetEMSNotes()
        {
            var result = db.EMSNotes.OrderBy(c => c.NoteId).ThenBy(c => c.Note).ToList();
            return Ok(result);
        }


        // GET: api/EMSNote/5
        [ResponseType(typeof(EMSNote))]
        public IHttpActionResult GetEMSNote(int complaintId)
        {
            if (complaintId > 0)
            {
                var results = db.EMSNotes.Where(n => n.ComplaintId == complaintId).OrderByDescending(n => n.CreatedDate).ToList();
                if (results == null)
                {
                    return NotFound();
                }

                return Ok(results);
            }
            else
                return NotFound();
        }

        // POST: api/Note/UPdate
        [HttpPost]
        [Route("api/Note/Update")]
        [ResponseType(typeof(void))]
        public IHttpActionResult UpdateNote(EMSNote eMSNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!EMSNoteExists(eMSNote.NoteId))
            {
                return NotFound();
            }

            db.Entry(eMSNote).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return Ok(eMSNote);
        }

        // POST: api/Note/Insert
        [HttpPost]
        [Route("api/Note/Insert")]
        [ResponseType(typeof(EMSNote))]
        public IHttpActionResult InsertNote(EMSNote eMSNote)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMSNotes.Add(eMSNote);
            db.SaveChanges();

            return Ok(eMSNote);
        }

        // POST: api/Note/Delete
        [HttpPost]
        [Route("api/Note/Delete")]
        [ResponseType(typeof(EMSNote))]
        public IHttpActionResult DeleteNote(DelDto delDto)
        {
            EMSNote eMSNote = db.EMSNotes.Find(delDto.Id);
            if (eMSNote == null)
            {
                return NotFound();
            }

            db.EMSNotes.Remove(eMSNote);
            db.SaveChanges();

            return Ok(eMSNote);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EMSNoteExists(int id)
        {
            return db.EMSNotes.Count(e => e.NoteId == id) > 0;
        }
    }
}