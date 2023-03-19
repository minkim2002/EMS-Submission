using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMSApi.Models
{
    public class SearchEMS
    {
        public int CategoryId { get; set; }
        public int SubCategoryId { get; set; }
        public string Location { get; set; }
        public string Unit { get; set; }
        public string ReportStatus { get; set; }
        public DateTime ReviewedStartDate { get; set; }
        public DateTime ReviewedEndDate { get; set; }
        public string SortBy { get; set; }
        public string SortOrder { get; set; }
    }
}