using EMSApp.Models;
using EMSApp.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

/// <summary>
/// Author      : Min Kim
/// Date        : 8/3/2022
/// Description : EMS Submission E-form Client Application
/// </summary>

namespace EMSApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            SetUserName();
            ViewBag.IndexClick = "active";
            return View();

        }

        [Authorize(Roles = "FRD-APPLICATION-EMS-SUBMISSION-ADMIN")]
        public IActionResult Admin()
        {
            SetUserName();
            ViewBag.AdminClick = "active";
            return View();
            
        }

        [Authorize(Roles = "FRD-APPLICATION-EMS-SUBMISSION-ADMIN")]
        public IActionResult Category()
        {
            SetUserName();
            ViewBag.ManageClick = "active";
            ViewBag.CategoryClick = "active";
            return View();

        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private void SetUserName()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("UserName")))
            {
                HttpContext.Session.SetString("UserName", UserName.GetUsername(User.Identity.Name));
            }

            SetPhotoFile();
        }

        private void SetPhotoFile()
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("PhotoFile")))
                HttpContext.Session.SetString("PhotoFile", PhotoFile.SetUserPhoto(User.Identity.Name, Request.Host.Host));
        }
    }
}