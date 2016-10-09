(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('MenuDataRestBaseUrl', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'MenuDataRestBaseUrl'];
  function MenuDataService($http, MenuDataRestBaseUrl) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
                    method: 'GET',
                    url: MenuDataRestBaseUrl + '/categories.json'
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        return [];
      });
    }
    service.getItemsForCategory = function(categoryShortName) {
      return $http({
                    method: 'GET',
                    url: MenuDataRestBaseUrl + '/menu_items.json',
                    params: {
                      category: categoryShortName
                    }
      }).then(function (response) {
        return response.data.menu_items;
      }, function (response) {
        return [];
      });
    }
  }
 }
)();
