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
    
    public partial class EMSVCategory
    {
        public string ParentDesc { get; set; }
        public int CategoryId { get; set; }
        public Nullable<int> ParentId { get; set; }
        public string CategoryType { get; set; }
        public string CategoryCode { get; set; }
        public string CategoryDesc { get; set; }
        public Nullable<int> SortOrder { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public string UpdatedBy { get; set; }
    }
}
