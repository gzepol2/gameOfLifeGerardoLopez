import angular from 'angular';
import Main from './main/main';

const componentModule = angular.module('app.components', [
  Main,
])

  .name;

export default componentModule;
