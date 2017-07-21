using Microsoft.EntityFrameworkCore;
using System;

namespace webservices
{

    public partial class ApplicationDbContext : DbContext
    {
        public virtual DbSet<Customer> Customers { get; set; }
        // public virtual DbSet<SignInLog> SignInLog { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
            optionsBuilder.UseSqlServer("Server=tcp:tccpsql.database.windows.net,1433;Initial Catalog=TCCP;User Id=cycleProject@tccpsql.database.windows.net;Password=1Trek520;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<Customer>(entity =>
            // {
            //     entity.Property(e => e.id).IsRequired();
            // });

            // modelBuilder.Entity<SignInLog>(entity =>
            //           {
            //               entity.Property(e => e.id).IsRequired();
            //           });

            modelBuilder.Entity<Customer>(entity =>
            {
                // entity.HasOne(d => d.firstName);
                Console.Out.WriteLineAsync("entity");
                //.WithMany(p => p.Post)
                // .HasForeignKey(d => d.BlogId);
            });
        }
        public void test()
        {
            Customer x = new Customer();
            x.firstName = "test";
            x.lastName = "test2";

            var c = this.Customers.Add(x);

            c.Context.SaveChanges();

            Console.Out.WriteLineAsync("test out");
        }
    }

}
// public CustomerContext(DbContextOptions<BloggingContext> options)
//     : base(options)
// { }
