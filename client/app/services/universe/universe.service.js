const universeService = function (
  UniverseConstants,
) {
  'ngInject';

  const constants = UniverseConstants;

  /**
   * create the grid from the constants values
   * @param {Object} pivotConfiguration Curren pivot Configuration
   * @returns {Object} the grid for the Universe
   */
  const createGrid = () => {
    const grid = { rows: [] };
    for (let rowIndex = 0; rowIndex < constants.ROW_MAX; rowIndex += 1) {
      const columns = [];
      for (let colIndex = 0; colIndex < constants.COL_MAX; colIndex += 1) {
        const cell = { age: 0 };
        columns.push(cell);
      }
      grid.rows.push({ columns });
    }
    return grid;
  };

  /**
  * @returns {Object} the constants configuration
  */
  const getConstants = () => constants;

  const _countNeighbours = (row, column, grid) => {
    let total = 0;

    for (let rowIndex = row - 1; rowIndex <= row + 1; rowIndex += 1) {
      for (let colIndex = column - 1; colIndex <= column + 1; colIndex += 1) {
        if ((rowIndex !== row || colIndex !== column) && (grid.rows[rowIndex]) &&
          (grid.rows[rowIndex].columns[colIndex])) {
          if (grid.rows[rowIndex].columns[colIndex].age >= 1) {
            total += 1;
          }
        }
      }
    }

    return total;
  };

  /**
   * update the grid with the new status of the seeds
   * @param {Object} grid horizontal position
   * @return {Object} the updated grid
   */
  const updateUniverse = (grid) => {
    angular.forEach(grid.rows, (row, rowIndex) => {
      angular.forEach(row.columns, (seed, columnIndex) => {
        const neighbours = _countNeighbours(rowIndex, columnIndex, grid);
        seed.neighbours = neighbours;
      });
    });
    angular.forEach(grid.rows, (row) => {
      angular.forEach(row.columns, (seed) => {
        if (seed.age >= 1) {
          if (seed.neighbours >= 4 || seed.neighbours <= 1) {
            seed.age = 0;
          } else {
            seed.age += 1;
          }
        } else if (seed.neighbours === 3) {
          seed.age = 1;
        }
      });
    });

    return grid;
  };

  return {
    createGrid,
    getConstants,
    updateUniverse,
  };
};

export default universeService;
