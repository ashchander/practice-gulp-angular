myApp.controller("MainCtrl", ["$scope", ($scope: ng.IScope) => new MainFeature.MainCtrl($scope)]);

module MainFeature {
    export class MainCtrl{
        private scope: ng.IScope;
        private message: string;
        private name: string;
        private persons: Array<string>

        constructor($scope: ng.IScope){
            this.scope = $scope;
            this.message = 'Hello World';
            this.persons = [];
        }

        public AddPerson():void{
            this.persons.push(this.name);
        }
    }
}
