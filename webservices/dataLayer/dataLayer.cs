using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace webservices.dataLayer
{

    public class DataLayer
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public DataLayer()
        {

        }

        public IEnumerable<Customer> GetCustomerByName(string term)
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

        public bool IsCustomerSignedIn(int id)
        {
            var x = db.SignInLog.Where(e => e.customerId == id && e.inTime != e.outTime).LastOrDefault();
            if (x == null)
            {
                Console.Out.WriteLine("not signed in");
                return false;
            }
            else
            {
                Console.WriteLine("signin");
                return x.outTime.Date.TimeOfDay == x.inTime.Date.TimeOfDay;

            }
        }
        public void ExpireOldSignIns(int id)
        {
            var s = db.SignInLog.Where(e => e.customerId == id && e.inTime.Date != DateTime.Now.Date && e.inTime == e.outTime).ToList();

            foreach (var item in s)
            {
                // Console.Out.WriteLine(item.inTime);

                Console.WriteLine("clearing old logins: " + s.Count);
                signOutExpiredCustomerBySignInId(item.id);


            }
        }
        public bool ShouldCustomerBeSignedOut(int id)
        {
            var s = db.SignInLog.Where(e => e.customerId == id && e.inTime.Date != DateTime.Now.Date).ToList();

            foreach (var item in s)
            {
                // Console.Out.WriteLine(item.inTime);
                if (item.hoursEarned == 0)
                {
                    Console.WriteLine("x clearing old logins: " + s.Count);
                    signOutExpiredCustomerBySignInId(item.id);
                    return false;
                }
                else
                {
                    return true;
                }
            }
            return false;
        }
        public bool signOutExpiredCustomerBySignInId(int signinId)
        {
            SignInLog x = db.SignInLog
                     .Where(e => e.id == signinId
                     )
                     .FirstOrDefault();
            x.outTime = x.inTime;
            x.outTime = x.inTime.AddHours(1);
            TimeSpan hoursEarned = x.outTime - x.inTime.AddHours(-1);
            Console.WriteLine(hoursEarned.Minutes);
            x.hoursEarned = hoursEarned.Minutes;
            db.SignInLog.Update(x);
            db.SaveChanges();

            return true;
        }
        public bool signOutCustomerBySignInId(int custID, int signinId)
        {
            SignInLog x = db.SignInLog
                     .Where(e => e.customerId == custID && e.id == signinId
                     )
                     .FirstOrDefault();
            x.outTime = DateTime.Now;
            TimeSpan hoursEarned = x.outTime - x.inTime;
            Console.WriteLine(hoursEarned.Minutes);
            x.hoursEarned = hoursEarned.Minutes;
            db.SignInLog.Update(x);
            db.SaveChanges();

            return true;
        }
        public bool signOutCustomer(int id)
        {
            //signing out
            SignInLog x = db.SignInLog
              .Where(e => e.customerId == id
              && e.inTime.Date == DateTime.Now.Date
              && e.inTime.Date == e.outTime.Date
              )
              .FirstOrDefault();
            if (x != null)
            {
                Console.WriteLine("signing out");
                x.outTime = DateTime.Now;
                TimeSpan hoursEarned = x.outTime - x.inTime;
                Console.WriteLine(hoursEarned.Minutes);
                x.hoursEarned = hoursEarned.Minutes;
                db.SignInLog.Update(x);
                db.SaveChanges();
            }


            return true;
        }
        public bool CreateNewCustomerSignInEntry(int id)
        {
            SignInLog s = new SignInLog()
            {
                customerId = id,
                inTime = System.DateTime.Now,
                outTime = System.DateTime.Now
            };

            db.SignInLog.Add(s);
            db.SaveChanges();

            return true;
        }
        public string SignInCustomer(int id)
        {
            //recalc old logins
            ExpireOldSignIns(id);
            if (IsCustomerSignedIn(id))
            {

                ShouldCustomerBeSignedOut(id);
                signOutCustomer(id);

                return "1";
            }
            else
            {
                //user not signed in
                CreateNewCustomerSignInEntry(id);
                return "1";
            }
        }

        public IEnumerable<SignInLog> GetUserSignInLog(int id)
        {
            return db.SignInLog.Where(e => e.customerId == id);
        }

        public IEnumerable<SignInLog> GetAllSignedInUsers()
        {
            return db.SignInLog.ToList();
        }

        public Customer CreateCustomer(Customer value)
        {
            Console.WriteLine("posted");
            db.Customers.Add(value);
            db.SaveChanges();
            return value;
        }

        public Customer GetCustomerByID(int id)
        {
            return db.Customers.FirstOrDefault(c => c.id == id);
        }
    }
}