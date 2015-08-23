# the Juice Bar is Now Open

** Juice Bar ** is an implementation of the Roots static site generator from within the Gulp streaming build system. It's purpose is to provide Roots with some of the additional functionality which is not (yet) available either natively or by extensions. Currently, Juice Bar includes the following gulp plug ins by default:

- gulp-imagemin
- gulp-svg-symbols
- browser-sync

## Installation
To use Juice-Bar, the following packages must be installed on your system:

- Node.js
- Gulp
- Roots

Additional packages may also be required, depending what environment or operating system you are using. See the section below for details.

### Ubuntu Installation Guide

#### Install Git
Roots uses git to import templates into its build system. Additionally, its a very handy package to have when deploying your website to Github Pages. From the command-line, enter the following:

```
sudo apt-get install git
```

You will be asked for your root password. Once it has been entered, git will be downloaded from the Ubuntu repo and installed on your system.

#### Install Node.js
On Ubuntu, it is imperative that you have Node.js installed using the Node Version Manager(NVM). If you have installed the Node binary via PPA or from the Ubuntu repository, delete it and start over. For detailed instructions on how to install NVM, see [this article](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server).

**Note:** Juice Bar has been tested on Node.js version 0.12.7. Install this latest version of Node instead of the one mentioned in the aforementioned article.

#### Install Gulp and Roots
From the command-line, enter:
```
nvm use 0.12.7
```
You will see a message on your terminal that states that Node is ready for use. Next, enter the following:

```
npm install -g gulp roots
```
The Node Package Manager(NPM) will download and install gulp and roots so it can be used globally on your system.

#### Clone the Github Repo
From the command-line, enter:
```
git clone: https://github.com/michaelkornblum/juice-bar.git
```
A folder will be created in your home directory named ```juice-bar```. Use the cd command to move into this newly created directory for the next step.

#### Install Gulp Dependencies
Once you have moved into the ```juice-bar``` directory, enter the following command:
```
npm install
```
The Node Package Manger(NPM) will download and install the modules needed to run the Gulp portion of Juice Bar.

#### Create Roots Instance
This is the last step before installation is complete. From the command-line, enter:
```
gulp roots:init
```
Gulp will ask you for your website's name and description. It will then have NPM pull in the remaining roots dependencies.

#### Start Gulp
From the command line, enter:
```
gulp
```
Gulp wil start by cleaning out the ```roots/public``` directory and perform a series of build tasks before starting the file watcher and browser-sync server. Juice Bar is now ready to help you build your website.
