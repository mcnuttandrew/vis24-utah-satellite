const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy({
    "src/assets/logo.png": "/assets/logo.png",
    "src/assets/gator_coffee_mountains.png":
      "/assets/gator_coffee_mountains.png",
    "src/assets/gator_satellite.png": "/assets/gator_satellite.png",
  });
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
  };
};
