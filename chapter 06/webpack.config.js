module.exports = {
    entry: "./static/main.jsx",
    output: {
        path: __dirname + "/static/build/",
        filename: "bundle.js"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader", query:{presets:['react','es2015']} }
        ]
    }
};
