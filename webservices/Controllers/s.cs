using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace webservices.Controllers
{
    [Route("api/s")]
    public class s : Controller
    {
        // GET api/test
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            ApplicationDbContext db = new ApplicationDbContext();
            db.test();

            return db.Customers.ToList(); ;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
