module.exports = function(eleventyConfig) {
  // Output directory: _site

  eleventyConfig.addPassthroughCopy('./assets/img');

  eleventyConfig.addPassthroughCopy('./assets/css/main.css');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }

};