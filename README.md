# DM-intro-to-webpack
A simple introduction to webpack for DevMountain bootcamp students. Webpack is the latest hotness of bundlers/task-runners. We'll start with basic bundling and go from there.

### Primary benefits of using a front-end build process like webpack
- modules: variable scoping (way less global scope), code organization, potential for componentization
- organization: javascript, assets, javascript, styles, javascript
- use next-gen EcmaScript
- easily incorporate techs like SASS/LESS, etc.
- facilitate production code packaging
- and the list goes on... (see the googles)

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
Create an index.html file and add `bundle.js` as a dependency in your index.html. Put a console.log() in a file called `entry.js` and run `webpack` from the command line. Open index.html in a browser to see the log working.

## Exports and Imports
You can use Node-style `module.exports` and `require()`s, which are native to webpack, or you can use the standardized ESnext `import` and `export` keywords. To use any features of ESnext, we need Babel.js. Awesome thing about modules: only variables that exist in a module are part of your app. Way less opportunity for pollution of global scope.

## Using Babel
Run `npm install --save-dev babel-core babel-loader babel-preset-es2015`  
Then add a file called `.babelrc` with these contents:  
```
{
  "presets": ["es2015"]
}
```
Then you can add your first loader to your config. What this does is any file with an extension that matches the text regular expression will be processed through the specified loader, in this case babel. Add loaders to the `module` property of the main export module, as a sibling to `entry` and `output`. Your config should now look like:
```
module.exports = {
  entry: './entry.js',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
    ]
  },
}
```
Make sure you restart webpack, if it was in watch mode, so that it is using the new config. Now use ES2015+ and don't look back!

## Next steps
- use `webpack -w` to leave webpack watching for file changes
- use `webpack-dev-server` to watch, as well as serve your app
- use SASS/LESS, and have webpack compile it to css for you
- for angular, split your code up into multiple modules. you can even configure routes separately in each module and they can all play nice under the root module
