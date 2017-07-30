using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace webservices.Controllers
{
    [Route("api/customers")]
    public class customersController : Controller
    {
        ApplicationDbContext db = new ApplicationDbContext();

        [HttpGet]
        public IEnumerable<Customer> Get([FromQuery] string term)
        {
            // Console.WriteLine(term);

            Console.WriteLine("term" + term);
            if (term == null)
            {
                Console.WriteLine("empty");
                return db.Customers.ToList();
            }
            else
            {
                return db.Customers.Where(
                                e => e.firstName.ToLower().Contains(term) ||
                                e.lastName.ToLower().Contains(term) ||
                                (e.firstName.ToLower() + ' ' + e.lastName.ToLower()).Contains(term)
                            ).ToList();
            }

        }

        [HttpGet("{id}")]
        public Customer Get(int id)
        {
            return db.Customers.FirstOrDefault(c => c.id == id);
        }

        // POST api/values
        [HttpPost]
        public Customer Post([FromBody]Customer value)
        {
            Console.WriteLine("posted");
            db.Customers.Add(value);
            db.SaveChanges();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }
    }
}
