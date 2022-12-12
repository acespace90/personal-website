const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy('./assets/img');
  eleventyConfig.addPassthroughCopy('./assets/css/*.css');
  eleventyConfig.addPassthroughCopy('./assets/scripts/main.js');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addFilter("dateMed", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("dateShort", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_SHORT);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }

};