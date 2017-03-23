# Doctor Lookup

#### _Doctor Lookup, 3/16/2017_

#### By **Sean Peterson**
https://github.com/Sean-Peterson

## Description

_A web app where a user enters a medical ailment into a form, submits it, and is then given a list of doctors that can treat the ailment._

## Setup/Installation Requirements
1. Receive an API key from BetterDoctors API Key
  * Go to [BetterDoctors API site](https://developer.betterdoctor.com/) and click “Get a free API key”.
  * Authenticate with GitHub, or fill out the form.
  * Your API key should be listed in My Account > Applications.

2. Fork and clone this repository onto your desktop from [gitHub](https://github.com/Sean-Peterson/library-project).
3. In terminal: npm install
4. In terminal: bower install
5. In js/doctor.js replace "require('./../.env').apiKey;" on line one with your new API Key.
5. In terminal: gulp build
6. In terminal: gulp serve

## Specs

* Input: toothache. Output: list of doctors that can treat a toothache

## Planning

1.  Dependencies

  * Development Dependencies found in package.json
    * "bower-files": "^3.14.1"
    * "browser-sync": "^2.18.8"
    * "browserify": "^14.1.0"
    * "del": "^2.2.2"
    * "gulp": "^3.9.1"
    * "gulp-concat": "^2.6.1"
    * "gulp-jshint": "^2.0.4"
    * "gulp-sass": "^3.1.0"
    * "gulp-sourcemaps": "^2.4.1"
    * "gulp-uglify": "^2.1.0"
    * "gulp-util": "^3.0.8"
    * "jshint": "^2.9.4"
    * "vinyl-source-stream": "^1.1.0"

  * Production Dependencies found in bower.json
    * "jquery": "^3.1.1"
    * "bootstrap": "^3.3.7"
    * "moment": "^2.17.1"

2. Planning specs
  * Take user input and make it into search term.
  * Create a callback function that can handle a json object from and api call.
  * Create a function to take in two arguments and makes an api call from better doctors api
  * Grab the information I want to pass into the callback function and send it through.
  * In the callback function list out all of the information that a user needs.

3. UX/UI
  * Include and modify bootstrap/Sass
  * Style the returned information so a user enjoys looking at it.

4. Polish
  * Refactor .js files.
  * Delete unused code.
  * Update README.

## Known Bugs

None so far

## Support and contact details

Please contact seanpeterson11@gmail.com with concerns or comments.

## Technologies Used

* HTML: Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
* CSS: The Cascading Style Sheets Specification is a computer language that is used to write formatting instructions.
* SCSS: "SCSS is a nested metalanguage, as valid CSS is valid SCSS with the same semantics. SassScript provides the following mechanisms: variables, nesting, mixins, and selector inheritance.
* JavaScipt: An object-oriented computer programming language commonly used to create interactive effects within web browsers.
* Node.js: JavaScript runtime environment for developing a diverse variety of server tools and applications.
* npm: A NodeJS package manager. You can use it to install node programs. Also, if you use it in development, it makes it easier to specify and link dependencies.
* Bower: Is a package manager for keeping track of what you've installed, as well as installing and upgrading packages.
* Gulp: Gulp is a task/build runner for development.
* AJAX: In a nutshell, it is the use of the XMLHttpRequest object to communicate with server-side scripts.
* JSON: (JavaScript Object Notation) is a lightweight data-interchange format.

### License

*MIT license*

Copyright (c) 2017 **_Sean Peterson_**
