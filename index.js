var lb2br = require('./lb2br');

module.exports = {
  // Map of hooks
  hooks: {
    // For all the hooks, this represent the current generator
    "page": function(page) {
      page.content = lb2br(page.content);
      return page;
    }
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {}
};
