const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  // syntax highlights in markdown files
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  // hierarchical navigation using "eleventyNavigation" in markdown files
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Date:
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Tag functionality:
  eleventyConfig.setDataDeepMerge(true); // enables to merge "tags"
  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));

  // CSS:
  eleventyConfig.addPassthroughCopy("css");

  // Get the first `n` elements of a collection. Used in index.njk
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

};