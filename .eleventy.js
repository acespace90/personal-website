module.exports = function(eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy('./assets/img');
  eleventyConfig.addPassthroughCopy('./assets/css/main.css');
  eleventyConfig.addPassthroughCopy('./assets/scripts/main.js');
  eleventyConfig.addPassthroughCopy('./src/admin');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }

};