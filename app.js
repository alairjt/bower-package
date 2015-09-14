var app = angular.module("packageApp", ["testeApp"]);

app.run(['Apps',function(Apps) {
    Apps.add({name: "Package 3"});
}]);
  