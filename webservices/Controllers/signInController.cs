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

        // [Route("api/[controller]/getAll")]
        [HttpGet("/api/getAllSignedIn")]
        public IEnumerable<SignInLog> GetAllSignIn()
        { return db.SignInLog.ToList(); }

        // GET api/values
        [HttpGet]
        public IEnumerable<SignInLog> Get()
        {
            return db.SignInLog.ToList();
        }
        [HttpGet("/api/getUserSignInLog/{id}")]
        public IEnumerable<SignInLog> GetAllSignIn(int id)
        {
            return db.SignInLog.Where(e => e.customerId == id);
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
                )
                .FirstOrDefault();

                if (x != null && x.customerId != 0)
                {
                    //user is signed in
                    if (x.inTime.Date == DateTime.Now.Date && x.outTime == x.inTime)
                    {
                        //signing out
                        x.outTime = DateTime.Now;
                        TimeSpan hoursEarned = x.outTime - x.inTime;
                        Console.WriteLine(hoursEarned.Minutes);
                        x.hoursEarned = hoursEarned.Minutes;
                        db.SignInLog.Update(x);
                        db.SaveChanges();
                        db.Dispose();
                        return "2";
                    }
                    else
                    {
                        //already signed In
                        return "1";
                    }
                }
                else
                {
                    //sign in
                    SignInLog s = new SignInLog()
                    {
                        customerId = currentCustomer.id,
                        inTime = System.DateTime.Now,
                        outTime = System.DateTime.Now
                    };

                    db.SignInLog.Add(s);
                    db.SaveChanges();
                    db.Dispose();
                    return "1";
                }

            }
            else
            {
                return "0";
            }

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
