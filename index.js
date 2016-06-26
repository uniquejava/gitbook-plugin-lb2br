module.exports = {
  // Map of hooks
  hooks: {

    "page:before": function(page) {
      page.content = "# Title\n" +page.content;
      return page;
    },

    "page": function(page) {
      page.sections[0].content = page.sections[0].content.replace("<b>", "<strong>")
      .replace("</b>", "</strong>");
      return page;
    }
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {}
};
