(function () {
  'use strict';
  angular.module('MenuApp')
  .component('categoryList', {
    templateUrl: 'js/menuapp/templates/categorylist.template.html',
    bindings: {
     categories: '<'
    }
  });
 }
)();
