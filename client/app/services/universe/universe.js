import angular from 'angular';
import universeService from './universe.service';
import universeConstant from './universe.constant';

const universeServiceModule = angular.module('app.services.universeService', [])
  .constant('UniverseConstants', universeConstant)
  .factory('UniverseService', universeService);

export default universeServiceModule;
