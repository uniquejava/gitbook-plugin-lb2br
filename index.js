module.exports = {
  // Map of hooks
  hooks: {
    // For all the hooks, this represent the current generator

    // This is called before the book is generated
    "init": function() {
      console.log("init!");
    },

    // This is called after the book generation
    "finish": function() {
      console.log("finish!");
    },

    "page:before": function(page) {
      console.log("page:before!");
      page.content = "# Title\n" +page.content;
      return page;
    },

    "page": function(page) {
      console.log("page");
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
