var cheerio = require('cheerio');

module.exports = function lb2br(content) {
  var $ = cheerio.load(content);
  $('p').each(function(i, elem) {
    var p = $(elem);
    var innerHtml = p.html();
    innerHtml = innerHtml.replace(/\n/g, '<br>');
    p.html(innerHtml);
  });
  return $.html();
};
