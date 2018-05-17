import angular from 'angular';
import universe from './universe/universe';

const servicesModule = angular.module('app.services', [
  universe.name,
])

  .name;

export default servicesModule;
