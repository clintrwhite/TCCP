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
        ApplicationDbContext db = new ApplicationDbContext();

        // GET api/values
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            //ApplicationDbContext db = new ApplicationDbContext();
            //db.test();
            // db.SignInLog.Add
            return new Customer[] { };
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            //get the currentCustomer
            Customer currentCustomer =
            db.Customers.Where(e => e.id == id).FirstOrDefault();

            if (currentCustomer != null)
            {

                //check from signed in status
                SignInLog x = db.SignInLog
                .Where(e => e.customerId == currentCustomer.id
                //&& e.inTime != e.outTime
                )
                .FirstOrDefault();


                if (x != null && x.customerId != 0)
                {
                    Console.WriteLine("found signinlog" + x.id);

                    Console.WriteLine(x.inTime.Date == DateTime.Now.Date);
                    if (x.inTime.Date == DateTime.Now.Date && x.outTime == x.inTime)
                    {
                        x.outTime = DateTime.Now;
                        db.SignInLog.Update(x);
                        db.SaveChanges();
                        db.Dispose();
                        return "signedOut";
                    }
                    else
                    {
                        return "signedInExists";
                    }
                }
                else
                {
                    Console.WriteLine("sign In not null and cust doesn't exist");

                    //create new
                    SignInLog s = new SignInLog()
                    {
                        customerId = currentCustomer.id,
                        inTime = System.DateTime.Now,
                        outTime = System.DateTime.Now
                    };

                    db.SignInLog.Add(s);
                    db.SaveChanges();
                    db.Dispose();
                    return "signedIn";
                }

            }
            else
            {
                return "NoUser";
            }

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
