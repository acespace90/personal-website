const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy('./assets/img');
  eleventyConfig.addPassthroughCopy('./assets/css/main.css');
  eleventyConfig.addPassthroughCopy('./assets/scripts/main.js');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }

};