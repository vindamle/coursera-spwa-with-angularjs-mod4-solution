(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);
  ItemsController.$inject = ['$stateParams',  'categories', 'items'];
  function ItemsController($stateParams, categories, items) {
   var itemsCtrl = this;
   itemsCtrl.category = categories.filter(function (c) {
    return c.short_name === $stateParams.short_name
   })[0];
   itemsCtrl.items = items;
  }
 }
)();
