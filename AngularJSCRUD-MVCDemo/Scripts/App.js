
var app = angular.module('adventureModule', []);
app.factory('personService', function ($http) {
    var factory = {};
    factory.getallrecords = function () {
        return $http.get('api/Person/GetAllPersons');
    }
    return factory;
});