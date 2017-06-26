using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularJSCRUD_MVCDemo.Interface;
using AngularJSCRUD_MVCDemo.Repositories;
using System.Collections;
using AngularJSCRUD_MVCDemo.Models;

namespace AngularJSCRUD_MVCDemo.Controllers
{
    public class PersonController : ApiController
    {

        static readonly IPersonRepository repository = new PersonRepository();

        public IEnumerable GetAllPersons()
        {
            return repository.GetAll();
        }
        public Person AddPerson(Person item)
        {
            return repository.Add(item);
        }

        [HttpPut]
        public IEnumerable UpdatePerson(int id, Person item)
        {
            item.Id = id;
            if (repository.Update(item))
                return repository.GetAll();
            else
                return null;
        }
        public bool DeletePerson(int id)
        {
            if (repository.Delete(id))
                return true;
            else
                return false;
        }
    }
}
