using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AngularJSCRUD_MVCDemo.Interface;
using AngularJSCRUD_MVCDemo.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace AngularJSCRUD_MVCDemo.Repositories
{
    public class PersonRepository : IPersonRepository
    {

        AngularJSDemosEntities1 DB = new AngularJSDemosEntities1();
        public IEnumerable<Models.Person> GetAll()
        {
            return DB.person;
        }

        public Models.Person Get(int id)
        {
            return DB.person.Find(id);
        }

        public Models.Person Add(Models.Person item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            DB.person.Add(item);
            DB.SaveChanges();
            return item;
        }

        public bool Update(Models.Person item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            var person = DB.person.Single(a => a.Id == item.Id);

            person.FirstName = item.FirstName;
            person.LastName = item.LastName;
            person.Age = item.Age;
            person.Gender = item.Gender;
            person.City = item.City;
            DB.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            Person item = DB.person.Find(id);
            DB.person.Remove(item);
            DB.SaveChanges();
            return true;
        }
    }
}