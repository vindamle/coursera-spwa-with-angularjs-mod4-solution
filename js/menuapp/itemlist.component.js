(function () {
  'use strict';
  angular.module('MenuApp')
  .component('itemList', {
    templateUrl: 'js/menuapp/templates/itemlist.template.html',
    bindings: {
     categories: '<',
     items: '<'
    }
  });
 }
)();
