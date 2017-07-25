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

            CustomerSearch x = JsonConvert.DeserializeObject<CustomerSearch>(term.ToLower());
            Console.WriteLine(x.name);
            Console.WriteLine("term" + term);

            return db.Customers.Where(
                e => e.firstName.ToLower().Contains(x.name) ||
             e.lastName.ToLower().Contains(x.name) ||
             (e.firstName.ToLower() + ' ' + e.lastName.ToLower()).Contains(x.name)

            ).ToList();
        }

        [HttpGet("{id}")]
        public Customer Get(int id)
        {
            return db.Customers.FirstOrDefault(c => c.id == id);
        }

        // POST api/values
        [HttpPost]
        public string Post([FromBody]Customer value)
        {
            Console.WriteLine("posted");
            db.Customers.Add(value);
            db.SaveChanges();
            return value.firstName;
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
