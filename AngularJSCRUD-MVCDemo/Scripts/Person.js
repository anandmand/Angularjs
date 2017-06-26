/// <reference path="angular.js" />
/// <reference path="App.js" />

app.controller('personCtrl', function ($scope, $http, personService) {

    $scope.personData = null;
    personService.getallrecords().then(function (d) {
        $scope.personData = d.data;
    }, function (response) {
        alert('error occurred'+response.data.ExceptionMesage);
    });

    $scope.Person = {
        Id: '',
        FirstName: '',
        LastName: '',
        Age: '',
        Gender: '',
        City: ''
    };

    $scope.clear = function () {
        $scope.Person.Id = '',
        $scope.Person.FirstName = '',
        $scope.Person.LastName = '',
        $scope.Person.Age = '',
        $scope.Person.Gender = '',
        $scope.Person.City = ''
        $scope.addnewdiv = false;
        $scope.updatediv = false;
    };
    //Add new record

    $scope.save = function () {
        if ($scope.Person.FirstName != '' && $scope.Person.LastName != '' && $scope.Person.Age != '' && $scope.Person.Gender != '' && $scope.Person.City != '') {
            $http({
                method: 'POST',
                url: 'api/Person/AddPerson',
                data: $scope.Person

            }).then(function successCallback(response) {
                debugger;
                $scope.personData.push(response.data);
                $scope.clear();
                alert('Inserted successfully!!');
                $scope.addnewdiv = false;
            }, function errorCallback(response) {

                alert('error:' + response.data.ExceptionMesage);
            });
        }
        else {
            alert('Please enter all the values!!');
        }

    };

    //Edit records
    $scope.edit = function (data) {
        debugger;
        $scope.Person = { Id: data.Id, FirstName: data.FirstName, LastName: data.LastName, Age: data.Age, Gender: data.Gender, City: data.City }
        $scope.updatediv = true;
    };

    //Cancel record

    $scope.cancel = function () {
        $scope.clear();
    };

    //Update record
    $scope.update = function () {
        if ($scope.Person.FirstName != '' && $scope.Person.LastName != '' && $scope.Person.Age != '' && $scope.Person.Gender != '' && $scope.Person.City != '') {
            $http({
                method: 'PUT',
                url: 'api/Person/UpdatePerson/' + $scope.Person.Id,
                data: $scope.Person

            }).then(function successCallback(response) {
                debugger;
                $scope.personData = response.data;
                $scope.clear();
                alert('Updated successfully!!');
                $scope.updatediv = false;
            }, function errorCallback(response) {

                alert('error:' + response.data.ExceptionMesage);
            });
        }
        else {
            alert('Please enter all the values!!');
        }
    };

    //Delete record
    $scope.delete = function (index) {
        debugger;
        $http({
            method: 'DELETE',
            url: 'api/Person/DeletePerson/' + $scope.personData[index].Id,

        }).then(function successCallback(response) {
            debugger;
            $scope.personData.splice(index, 1);
            alert('Record deleted successfully');
        }, function failureCallback(response) {
            alert('error:' + response.data.ExceptionMesage)
        });

    };
});
