import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import mainComponent from './main.component';

const mainModule = angular.module('main', [
  uiRouter,
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        component: 'main',
      });
  })

  .component('main', mainComponent)

  .name;

export default mainModule;
