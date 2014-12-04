# EmberBlog

A light weight ember blog application used to explore and in some cases highlight some of the functionality and capabilities of ember (more specifically: ember-cli).  This particular application is built using an extended set of tools to build a remarkably ambitious app considering the short amount of time put into it.  The goal here is to dive just a little deeper than a basic tutorial and provide some code to get the juices flowing.

The Master Branch will continue to evolve (I do have some intent to make use of and embellish on this some).  The Example branch is here to serve as a general reference and will no longer be updated.  It is there specifically to serve as a reference for ember-curious developers.

As it stands right now, and as it will always be in the case of the "Example" branch, some parts are only partially integrated - such as uploading a picture in the WYSIWYG editor.  The deployment comes complete with a test server to actively utilize ember data against.   If you're here to get a feel for how ember handles interactions with REST API's I'd highly recommend utilizing Tamper Data or Wireshark to correlate interactions against the code.

At some point I'll write a more thorough guide to highlight some of the finer and possibly less obvious elements of the code.

The actual ember app source is within the `/app` directory.  The test server code can be found in the `/server/mocks/` directory.  Lastly, the `dist` folder contains the client files in static form.  In a production type setting, this would be where you would find the necessary code to put in your server for your single page webapp (or where to pont your CI to as the files it cares about monitoring within your git repo). 

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
* Visit your app at `http://localhost:4200`.

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

I've included these in an attempt to help those less familiar with some of the dependencies ember-cli uses (NPM and Bower in particular).  This is here to help in setting up system dependencies and the environment required if you are having trouble and is intended to cover the "set up" stages required in preparing your environment.  If you're using another OS (or version) and you find something is significantly different I'd be happy to add your notes and discoveries.

**Always know what a command does before you run it.  While I will genuinely and truly empathize with you in the case that you pwn something important, I am not responsible for the damage your clipboard caused.**

1. Make sure your package repositories are up to date.  While we're at it it's probably a good idea to update our system too.
    * `sudo apt-get update`
    * `sudo apt-get upgrade`

2. Install necessary system dependencies:
    * `sudo apt-get install nodejs-legacy npm git`

3. Alter the NPM global install path prefix.  Doing so will solve a lot of potential permission issues without sacrificing as much system integrity as other solutions I've found.  You're environmental needs may of course be different - though caution is advised.  I would not change the permissions of my /usr/local or /usr/local/bin folder as some forums have advised.
    * `npm config set prefix ~/.npm`
    
4. Add the new NPM global prefix to your user PATH variable 
    * `echo "PATH=\"\$PATH:\$HOME/.npm/bin\"" >> ~/.profile`.
        * **CAUTION:** Make sure you typed this command in correctly.  You can double check by opening your ~/.profile file and making sure that the very last line reads: `PATH="$PATH:$HOME/.npm/bin"`.  Getting this wrong could clear your PATH variable and leave your system commands disabled.
         
5. Reload your profile:
    * `source ~/.profile`
    
6. You have a choice here.  You can either install ember-cli globally or just use it as a local node module.  Depending on which you choose...

    * (**RECOMMENDED**) If using ember-cli locally create a permanent alias to use the local ember installation.  In this case I'll be naming the alias **ember**, but you can name the alias as you see fit.  There's a legitimate case to be made for specifically NOT naming it ember.  Just remember - whatever you name this alias - it's your equivalent of the `ember` command from here on.  You will not need to install ember-cli manually.
        * `echo "alias ember=\"\\\$(npm bin)/ember\"" >> ~/.profile && source ~/.profile`
        
    * (**Alternative**) If you'd like to install ember-cli globally that's fine too!  **DO NOT USE SUDO!**
        * `npm install -g ember-cli`
    
7. Install Bower globally via npm.  Notice again that we are still **not** using sudo.
    * `npm install -g bower`.

8. Clone and Install the ember app as listed above in **Installation**.
    * `cd <desired_installation_directory>` (EG, `cd ~` to go to your $HOME directory)
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

