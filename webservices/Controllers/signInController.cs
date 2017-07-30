using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webservices.Controllers
{
    [Route("api/[controller]")]
    public class SignIn : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            //ApplicationDbContext db = new ApplicationDbContext();
            //db.test();

            return new Customer[] { };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]SignInLog s)
        {
            Console.WriteLine("post from query");

            return s.customerId.ToString();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody]string value)
        {
            return id.ToString();

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
