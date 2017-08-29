using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webservices.dataLayer;

namespace webservices.Controllers
{
    [Route("api/customers")]
    public class customersController : Controller
    {
        DataLayer dao = new DataLayer();

        [HttpGet]
        public IEnumerable<Customer> Get([FromQuery] string term)
        {
            return dao.GetCustomerByName(term);
        }

        [HttpGet("{id}")]
        public Customer Get(int id)
        {
            return dao.GetCustomerByID(id);
        }

        [HttpPost]
        public Customer Post([FromBody]Customer value)
        {
            return dao.CreateCustomer(value);


        }

        // // PUT api/values/5
        // [HttpPut("{id}")]
        // public void Put(int id, [FromBody]string value)
        // {
        // }

        // // DELETE api/values/5
        // [HttpDelete("{id}")]
        // public void Delete(int id)
        // {
        // }

    }
}
