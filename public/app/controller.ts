myApp.controller("MainCtrl", ["$scope", "MainFactory", ($scope: ng.IScope, MainFactory: MainFeature.MainFactory) => new MainFeature.MainCtrl($scope, MainFactory)]);

module MainFeature {
    export class MainCtrl{
        private scope: ng.IScope;
        private message: string;
        private name: string;
        private persons: Array<string>;
        private factory: MainFeature.MainFactory;

        constructor($scope: ng.IScope, MainFactory: MainFeature.MainFactory){
            this.scope = $scope;
            this.message = 'Hello World';
            this.persons = [];
            this.factory = MainFactory;
            this.loadExistingUsers();
        }

        public AddPerson():void{
            this.persons.push(this.name);
        }

        public loadExistingUsers():void {
          var p = this.persons
          this.factory.getExistingPersons().then(function(response: MainFeature.PersonsResponse){
            for(var i=0; i < response.data.length; i++){
                p.push(response.data[i]);
            }
          });
        }
    }
}
