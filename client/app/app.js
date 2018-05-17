import 'normalize.css';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import AppComponent from './app.component';

angular.module('app', [
  uiRouter,
])
  .config(($locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
