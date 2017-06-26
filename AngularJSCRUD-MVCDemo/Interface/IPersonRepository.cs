using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AngularJSCRUD_MVCDemo.Models;

namespace AngularJSCRUD_MVCDemo.Interface
{
    interface IPersonRepository
    {

        IEnumerable<Person> GetAll();
        Person Get(int id);
        Person Add(Person item);
        bool Update(Person item);
        bool Delete(int id);
    }
}
