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

  return {
    createGrid,
  };
};

export default universeService;
