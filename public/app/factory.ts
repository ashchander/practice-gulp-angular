myApp.factory('MainFactory', ['$http', '$q', ($http: ng.IHttpService, $q: ng.IQService) => new MainFeature.MainFactory($http, $q)]);

module MainFeature {
  interface FactoryError {
      message: string;
  }

  export interface PersonsResponse {
    data: Array<string>
  }

  export class MainFactory {
    private baseUrl: string;
    private http: ng.IHttpService;
    private q: ng.IQService;

    constructor($http: ng.IHttpService, $q: ng.IQService) {
      this.baseUrl = '/api';
      this.http = $http;
      this.q = $q;
    }

    public getExistingPersons(): ng.IPromise<any>{
      var defer = this.q.defer();
      this.http.get(this.baseUrl).
        then(function(response: PersonsResponse) {
          defer.resolve(response);
        }, function(response: FactoryError) {
          defer.reject(response);
        }
      );
      return defer.promise;
    }
  }
}
