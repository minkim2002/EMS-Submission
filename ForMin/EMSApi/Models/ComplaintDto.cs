using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMSApi.Models
{
    public class ComplaintDto
    {
        public EMSVComplaint EMSComplaint { get; set; }
        public List<EMSSupplementalDOC> EMSSupplementalDocs { get; set; }
        public List<EMSNote> EMSNotes { get; set; }
    }
}