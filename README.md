# Krafty-kai

This README outlines the details of collaborating on this Ember application.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM), [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

## Troubleshooting

 * **Ember and/or Bower Command is Not Found**: 
     * Quick Fix: Try installing [Ember-CLI](http://ember-cli.org) and/or [Bower](http://bower.io/) globally.
     * This could be indicative of an environment misconfiguration.  Correcting this is outside the scope of this document, however Ubuntu 14.04 setup instructions are included below and may help as a reference during the troubleshooting process.  If the above step didn't resolve your issue you'll need to fix the misconfiguration.

 * **Varying permission errors**:
     * You probably installed something using `sudo` that you shouldn't have.  A common source of this is installing an npm module globally and using the `sudo` command, IE `sudo npm install -g bower`.  If facing this issue you may be able to short-circuit the troubleshooting process by just installing ember-cli globally with `sudo npm install -g ember-cli`, but note that this might be indicative of a misconfiguration.

 * **Things are acting weird when I use NPM and the `node` command doesn't seem to work.**:
     * If you're on Ubuntu try installing nodejs-legacy instead of nodejs.  `sudo apt-get remove nodejs` `sudo apt-get install nodejs-legacy`. If things are still acting weird try following the Ubuntu install instructions below.
     * If you're not using Ubuntu I'd love to hear how you fixed the problem and what it was.
 
 
### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

