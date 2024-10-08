const inclusiveLangPlugin = require("@11ty/eleventy-plugin-inclusive-language");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });
  eleventyConfig.addPassthroughCopy({
    "src/assets/logo.png": "/assets/logo.png",
  });
  eleventyConfig.addPlugin(inclusiveLangPlugin);

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
