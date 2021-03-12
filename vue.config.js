module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '\n          @import "@/scss/main.scss";\n        '
      }
    },
    modules: true,
    sourceMap: true
  }
};
