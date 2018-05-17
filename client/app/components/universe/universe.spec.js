import UniverseModule from './universe';

describe('Universe', () => {
  let $rootScope;
  let $state;
  let $location;
  let $componentController;
  let $compile;

  beforeEach(window.module(UniverseModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be universe', () => {
      $location.url('/');
      $rootScope.$digest();

      expect($state.current.component).toEqual('universe');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('universe', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a name property', () => { // erase if removing this.name from the controller
      expect(controller.name).toBeDefined();
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope;
    let template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<universe></universe>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).toEqual('universe');
    });
  });
});
