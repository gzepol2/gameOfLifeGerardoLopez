import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import universeComponent from './universe.component';

const universeModule = angular.module('universe', [
  uiRouter,
])

  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('universe', {
        url: '/',
        component: 'universe',
      });
  })

  .component('universe', universeComponent)

  .name;

export default universeModule;
