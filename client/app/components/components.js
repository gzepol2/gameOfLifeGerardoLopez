import angular from 'angular';
import Main from './main/main';
import Universe from './universe/universe';


const componentModule = angular.module('app.components', [
  Main,
  Universe,
])

  .name;

export default componentModule;
