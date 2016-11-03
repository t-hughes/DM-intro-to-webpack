# DM-intro-to-webpack
A simple introduction to webpack for DevMountain bootcamp students. Webpack is the latest hotness of bundlers/task-runners. We'll start with basic bundling and go from there.

## Install webpack globally
`npm install -g webpack`

## Set up a basic configuration
Create a file called `webpack.config.js`  
Add the following to that file:  
```
module.exports = {
  entry: "./entry.js",
  output: {
    path: 'dist',
    filename: "bundle.js"
  },
}
```
Add `bundle.js` as a dependency in your index.html. Put something in `entry.js` and run `webpack` from the command line. Open index.html in a browser and see it if works.
