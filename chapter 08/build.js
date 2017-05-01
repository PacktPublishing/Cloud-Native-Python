({
  preserveLicenseComments: false,
  optimize: "uglify2",
  uglify2: {
    output: {
      beautify: false,
      comments: false
    },
    compress: {
      drop_console: true
    }
  },
  paths: {
    jquery: ".",
    jsx: "vendors/jsx-requirejs-plugin/js/jsx",
    JSXTransformer: "vendors/jsx-requirejs-plugin/js/JSXTransformer",
    text: "vendors/requirejs-text/text",
    react: "vendors/react/react-with-addons.min"
  },
  jsx: {
    fileExtension: ".jsx"
  },
  stubModules: ["jsx", "JSXTransformer", "text"]
})
