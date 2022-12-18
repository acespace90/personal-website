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

  function filterTagList(tags) {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  }

  eleventyConfig.addFilter("filterTagList", filterTagList)

  // Create an array of all tags
  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });

    return filterTagList([...tagSet]);
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }

};