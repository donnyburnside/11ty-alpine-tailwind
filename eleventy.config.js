module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/**/*');

  eleventyConfig.addPassthroughCopy({
    './src/static': '.',
    './tmp/css': './assets/css',
    './tmp/js': './assets/js'
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
      includes: '_includes',
      layouts: '_layouts'
    }
  }
};
