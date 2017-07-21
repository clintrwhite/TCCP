using System.Collections.Generic;

namespace webservices
{
    public class SignInLog
    {

        public SignInLog()
        {
            var Log = new HashSet<Customer>();
        }

        public virtual ICollection<Customer> Customer { get; set; }
        public int id { get; set; }
        public int customerId { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }
    }
}