import Dragger from './Dragger';

export default () => {
  const Sorter = require('./Sorter');
  const Resizer = require('./Resizer');

  return {
    /**
     * Name of the module
     * @type {String}
     * @private
     */
    name: 'Utils',

    /**
     * Initialize module
     */
    init() {
      return this;
    },

    Sorter,
    Resizer,
    Dragger
  };
};
