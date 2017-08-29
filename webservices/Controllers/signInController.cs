using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webservices.dataLayer;

namespace webservices.Controllers
{

    [Route("api/[controller]")]
    public class SignIn : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();
        DataLayer dao = new DataLayer();
        [Route("api/[controller]")]

        // [Route("api/[controller]/getAll")]
        [HttpGet("/api/getAllSignedIn")]
        public IEnumerable<SignInLog> GetAllSignIn()
        {
            return dao.GetAllSignedInUsers();
           
        }
        [HttpGet("/api/isUserSignedIn/{id}")]
        public bool isUserSignedIn(int id)
        {
            return dao.IsCustomerSignedIn(id);
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<SignInLog> Get()
        {
            return dao.GetAllSignedInUsers();
        }
        [HttpGet("/api/getUserSignInLog/{id}")]
        public IEnumerable<SignInLog> GetAllSignIn(int id)
        {
            return dao.GetUserSignInLog(id);
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return dao.SignInCustomer(id);
        }

      

        // // POST api/values
        // [HttpPost]
        // public string Post([FromBody]SignInLog s)
        // {
        //     Console.WriteLine("post from query");

        //     return s.customerId.ToString();
        // }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public string Put(int id, [FromBody]string value)
        // {
        //     return id.ToString();

        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
