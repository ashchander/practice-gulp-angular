var myApp = angular.module("myApp", []);

myApp.controller("MainCtrl", ["$scope", ($scope: ng.IScope) => new MainFeature.MainCtrl($scope)]);

module MainFeature {
    export class MainCtrl{
        private scope: any;
        private message: string;

        constructor($scope: ng.IScope){
            this.scope = $scope;
            this.SetMessage('Hello World');
        }
        public SetMessage(msg: string):void{
            this.message = msg;
        }
    }
}
