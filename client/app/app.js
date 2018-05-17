import 'normalize.css';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import Components from './components/components';
import AppComponent from './app.component';
import Services from './services/services';


angular.module('app', [
  uiRouter,
  Components,
  Services,
])
  .config(($locationProvider) => {
    'ngInject';

    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
