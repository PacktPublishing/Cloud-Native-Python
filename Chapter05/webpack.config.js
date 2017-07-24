module.exports = {
    entry: "./static/main.js",
    output: {
        path: __dirname + "/static/build/",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query:{presets:['react','es2015']} }
        ]
    }
};
