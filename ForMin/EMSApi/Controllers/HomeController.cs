using System.Web.Mvc;

/// <summary>
/// Author      : Min Kim
/// Date        : 8/3/2022
/// Description : EMS Submision eForm Web APIs
/// </summary>

namespace EMSApi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
