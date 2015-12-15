# grunt-prevent-debugger

[![npm version](https://badge.fury.io/js/grunt-prevent-debugger.svg)](https://badge.fury.io/js/grunt-prevent-debugger) [![Build Status](https://travis-ci.org/fpereira1/grunt-prevent-debugger.png?branch=master)](https://travis-ci.org/fpereira1/grunt-prevent-debugger)

Grunt plugin for preventing you from accidentally comitting a `debugger` into your project.

## Getting Started
This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-prevent-debugger --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-prevent-debugger');
```

## prevent-debugger task
_Run this task with the `grunt prevent-debugger` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Examples

Simple:

```js
"prevent-debugger": {
  files: [
    'test/**/*.js',
    '!test/ngScenario/DescribeSpec.js' // ignore this guy
  ]
}
```

Custom disallowed keywords list:

```js
"prevent-debugger": {
  files: [
    'test/**/*.js',
  ],
  options: {
    disallowed: ['ddescribe', 'iit']
  }
}
```

## Running the Tests
Run `grunt test`.

## License
BSD
