# require-backbone-template
This is a base template that includes the following features already configured based on nodejs.

  - NodeJS
  - Express server to run the project
  - requirejs with text plugin
  - BackBone
  - Lodash
  - Twitter Bootstrap v3.x
  - jQuery
  - less support
  - Grunt to complile it into 1 js/css file with mapping files

## Installation

You need grunt installed globally:

```sh
$ npm install -g grunt
```
Git clone the code to your system and install

```sh
$ git clone https://github.com/paulrichards19/require-backbone-template.git
$ cd require-backbone-template
$ npm install
```

## Usage

To run the server:
```sh
$ node server.js
```
Go to http://localhost:3001/index.html to view site.
public/js/app can contain all the backbone files. Main.js has the configuration and public/js/app/App.js is the
application entry point.

## Grunt build process
To build all files in to optimized JavaScript and CSS run:
```sh
$ grunt
```
You can then find all the files in the build folder.

## Grunt watch to build less file in development
```sh
$ grunt buildless
```
This will watch /public/css/less directory for changes and update /public/css/styles.css.

License
----

MIT
