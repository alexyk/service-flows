module.exports = function(api) {
  api && api.cache(false);
    return {
    "presets": ["@babel/preset-env"],
  }
}