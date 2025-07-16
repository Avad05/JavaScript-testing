const path = require("path");


module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  rules: [
    {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
  ],

} 