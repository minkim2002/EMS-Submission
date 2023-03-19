//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EMSApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class EMSComplaint
    {
        public int ComplaintId { get; set; }
        public string ComplaintStatus { get; set; }
        public string SubmitterName { get; set; }
        public string SubmitterPhoneNo { get; set; }
        public string SubmitterShit { get; set; }
        public Nullable<System.DateTime> RequestDate { get; set; }
        public string Location { get; set; }
        public Nullable<int> CategoryId { get; set; }
        public Nullable<int> SubCategoryId { get; set; }
        public string SubCategoryOthers { get; set; }
        public string Unit { get; set; }
        public string VehicleNumber { get; set; }
        public string AssetNumber { get; set; }
        public Nullable<int> ComplaintPriority { get; set; }
        public string SerialNumber { get; set; }
        public string IncidentNumber { get; set; }
        public string ComplaintDetail { get; set; }
        public string CommentsByAdmin { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}
