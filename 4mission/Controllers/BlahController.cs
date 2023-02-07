using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _4mission.Controllers
{
    public class BlahController : Controller
    {
      
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Grade ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Grade(object model)
        {
            return View();
        }
    }
}
