class UniverseController {
  /* @ngInject */
  constructor(UniverseService) {
    this.name = 'universe';
    this.universeService = UniverseService;
    this.grid = { rows: [] };
    this.seedsCoordinates = [
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 1, column: 0 },
      { row: 1, column: 3 },
      { row: 2, column: 1 },
      { row: 2, column: 2 },
    ];

  }

  $onInit() {
    this.grid = this.universeService.createGrid();
    this.createUniverse();
  }

  // inititialize the seeds in the grid
  initializeSeed(row, column) {
    this.grid.rows[row].columns[column].age = 1;
  }

  createSeeds() {
    angular.forEach(this.seedsCoordinates, (seed) => {
      this.initializeSeed(seed.row, seed.column);
    });
  }

  // initialize the grid and set the interval to check the state of the seeds
  createUniverse() {
    this.createSeeds();
  }


}

export default UniverseController;
