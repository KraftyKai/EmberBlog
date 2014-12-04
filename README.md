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

## Ubuntu 14.04 Environment Installation & Setup Instructions 
**How to set up NodeJS, NPM, and make sure things work**

I've included these in an attempt to help those less familiar with some of the dependencies ember-cli uses (NPM and Bower in particular).  ThIf you're using another OS (or version) and you find something is significantly different I'd be happy to add your notes and discoveries.

**Always know what a command does before you run it.  While I will genuinely and truly empathize with you in the case that you pwn something important, I am not responsible for the damage your clipboard caused.**

1. Make sure your package repositories are up to date `sudo apt-get update`.
    * While we're here, it's probably a good idea to `sudo apt-get upgrade`.

2. Install necessary system dependencies `sudo apt-get install nodejs-legacy npm git`.

3. Alter the NPM global install location `npm config set prefix ~/.npm`.
    * *Note: What we're doing here is solving a lot of potential permission issues without sacrificing as much system integrety.  You're environmental needs may be different.  I've found a few places that seem to recommend changing the /usr/local or /usr/local/bin permission set.  I'd not recommend doing that*.
    
4. Add the new NPM global prefix to your user PATH variable `echo "PATH=\"\$PATH:\$HOME/.npm/bin:\$(npm bin)\"" >> ~/.profile`.
    * **CAUTION:** Make sure you typed this command in correctly.  You can double check by opening your ~/.profile file and making sure that the very last line reads: `PATH="$PATH:$HOME/.npm/bin"`.  Getting this wrong could clear your PATH variable and leave your system commands disabled.
    
5. You have a choice here.  You can either install ember-cli globally or just use it as a local node module.  Depending on which you choose...
    * If using ember-cli globally you want to `npm install -g ember-cli`.  **DO NOT USE SUDO!**
    * If using ember-cli locally create a permanent alias to use the local ember installation `alias ember="\$(npm bin)/ember"`.  Name the alias as you see fit, just remember it's your equivalent of the `ember` command from here on.

6. Reload your profile `source ~/.profile`.
 
7. Install Bower globally via npm `npm install -g bower`.
    * Notice that we did **not** use sudo.

8. Clone and Install the ember app as listed above in **Installation**.
    * `cd <desired_installation_directory` (EG, `cd ~` to go to your $HOME directory)
    * `git clone http://github.com/KraftyKai/EmberBlog`
    * `cd EmberBlog`
    * `npm install` 
    * `bower install`
    * `ember serve` <- You should now have the dev server running on port 4200
 
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

