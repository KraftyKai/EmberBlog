/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

//Import bootstrap and bootstrap assets
app.import('vendor/bootstrap/js/bootstrap.min.js');
app.import('vendor/bootstrap/css/bootstrap.min.css');
app.import('vendor/bootstrap/css/bootstrap.css.map');

app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.eot');
app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.svg');
app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf');
app.import('vendor/bootstrap/fonts/glyphicons-halflings-regular.woff');

//Import font-awesome and font-awesome assets
app.import('bower_components/fontawesome/css/font-awesome.min.css');

app.import('bower_components/fontawesome/fonts/FontAwesome.otf', {
    destDir: 'fonts/'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.eot', {
    destDir: 'fonts/'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.svg', {
    destDir: 'fonts/'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts/'});
app.import('bower_components/fontawesome/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts/'});

//Import momentjs
app.import('bower_components/moment/moment.js');

//Import CodeMirror - import BEFORE summernote (or as AMD asset)
app.import('vendor/codemirror/codemirror.min.css');
app.import('vendor/codemirror/codemirror.min.js');
app.import('vendor/codemirror/formatting.min.js');
app.import('vendor/codemirror/monokai.min.css');
app.import('vendor/codemirror/xml.min.js');

//Import summernote
app.import('bower_components/summernote/dist/summernote.min.js');
app.import('bower_components/summernote/dist/summernote.css');

//Import asset images
app.import('vendor/images/technical-tux.png',{
    destDir: 'assets/images/'});
app.import('vendor/images/business-tux.png', {
    destDir: 'assets/images/'});
app.import('vendor/images/politics-tux.png', {
    destDir: 'assets/images/'});
app.import('vendor/images/everything-tux.png', {
    destDir: 'assets/images/'});
app.import('vendor/images/business-tux-bg.jpg', {
    destDir: 'assets/images/'});

module.exports = app.toTree();
