# the Juice Bar is Now Open

**Juice Bar** is an implementation of the Roots static site generator from within the Gulp streaming build system. It's purpose is to provide Roots with some of the additional functionality which is not (yet) available either natively or by extensions. Currently, Juice Bar includes the following gulp plug ins by default:

- gulp-imagemin
- gulp-svg-symbols
- browser-sync

## Installation
To use Juice-Bar, the following packages must be installed on your system:

- Node.js
- Gulp
- Roots

Additional packages may also be required, depending what environment or operating system you are using. See the sections below for details.

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
npm install -g gulp roots@3.1
```
The Node Package Manager(NPM) will download and install gulp and roots so it can be used globally on your system.

#### Clone the Github Repo
From the command-line, enter:
```
git clone https://github.com/michaelkornblum/juice-bar.git
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
Gulp wil start by cleaning out the ```roots/public``` directory and perform a series of build tasks before starting the file watcher and browser-sync server. Once your browser window opens to reveal a test page, Juice Bar is ready to help you build your website.
```
### OSX Installation Guide

#### Install C++ Compiler
Juice Bar's requires the use of a C++ compiler in order to work correctly. This is due to the fact that Roots and two Gulp plugins are compiled from source during the course of installation. Fortunately X-Code comes bundled with such a compiler. X-Code is available as a free download from the Apple App Store.

#### Install Node.js
On Mac OSX, it is imperative that you have Node.js installed using the Node Version Manager(NVM). If you have installed the Node binary from the website, delete it and start over. For detailed instructions on how to install NVM, go to  [the nvm github repo](https://github.com/creationix/nvm).

**Note:** Juice Bar has been tested on Node.js version 0.12.7. Install this latest version of Node for best results.

#### Install Gulp and Roots
From the command-line, enter:
```
nvm use 0.12.7
```
You will see a message on your terminal that states that Node is ready for use. Next, enter the following:

```
npm install -g gulp roots@3.1
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
Gulp wil start by cleaning out the ```roots/public``` directory and perform a series of build tasks before starting the file watcher and browser-sync server. Once your browser window opens to reveal a test page, Juice Bar is ready to help you build your website.

### Windows Installation Guide

#### Install Git for Windows
Git for Windows is vital to the installation of Juice Bar. Not only is it used to import templates into your Roots build, it also provides a Unix style command-line which will be used throughout this installation guide. Git for Windows is available as a free download from [this site](https://git-scm.com/download/win).

#### Install Node.js
Juice Bar is based on Node.js. Fortunately, it's a simple matter to download the Windows installer from [the Node.js project site](https://nodejs.org/).

#### Install Python 2.7
Node.js uses Python 2.7 to assist its compiler in building Roots and various Gulp plugins. To install Python, download the 2.7.10 installer from [the python.org webiste](https://www.python.org/downloads/). Once the installer is run, you must add python to your windows environment variables. Instructions on how to add python to you environment can be found [in this article](http://www.aaronstannard.com/how-to-setup-a-proper-python-environment-on-windows/).

#### Install C++ Compiler
Juice Bar requires the use of a C++ compiler in order to work correctly. This is due to the fact that Roots and two Gulp plugins are compiled from source during the course of installation. Fortunately Visual Studio comes bundled with such a compiler. Visual Studio Community can be downloaded from [here](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx). When installing Visual Studio, select the custom installation option and make sure that the C++ tools are all checked before installation begins. Wait until installation completes before you move on to the next step.

#### Install Gulp and Roots

**Note:** The following steps must be taken from within a Unix style command-line interface. Fortunately, such an interface is provided by Git for Windows. From the Start Menu, open the Git Bash application and follow the remainder of these instructions using this package.

From the command-line, enter:
```
npm install -g gulp roots@3.1
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
Gulp wil start by cleaning out the ```roots/public``` directory and perform a series of build tasks before starting the file watcher and browser-sync server. Once your browser window opens to reveal a test page, Juice Bar is ready to help you build your website.

## Gulp Commands

Juice-Bar uses a small collection of Gulp Tasks that work with Roots to create a full build environment. These tasks are listed below.

### gulp roots:init
The ```gulp roots:init``` task is used to create an instance of Roots within your build.

```
//initialize roots instance
gulp.task('roots:init', function(){
  return Roots.new({
    path: path.join(__dirname, 'roots')
    //uncomment the line below to use a custom template
    //,template: 'roots-base'
  }).done(function() {
    console.log("roots is ready");
  }, function(err){
    console.error("oh no! " + err);
  });
});
```

By uncommenting the template entry on line 6, and adding the desired template value, its possible to bring a custom template into your build.

### gulp roots:compile
The ```gulp roots:compile``` task is used to compile files from the ```assets```, and ```views``` directory into a completed websites that's viewable from the ```public directory```

### gulp roots:deploy
The ```gulp roots:deploy``` task is used to deploy a finished website to your github pages account. Note that a working github pages account is neccessary in order to use this task.

### gulp images
The ```gulp images``` task is used to minify jpgs, gifs, pngs, and svgs that are lacated in the ```images``` directory and sends them to ```roots/assets```for compilation.

### gulp vectors
The ```gulp images``` task is used to combine svgs into a single ```svg-symbols.svg```` file that can be included in Jade Templates.

 ```
 //symbolize svgs
 gulp.task('vectors', function(){
   return gulp.src('./vectors/*.svg')
     .pipe($.svgSymbols({
       templates: ['default-svg']
     }))
     .pipe(gulp.dest('./roots/views/'));
 });
 ```

Note that by changing the ```gulp.dest``` parameter in this task, its possible to move the ```svg-symbols``` file where ever it best serves your custom template.

### gulp browser-sync
The ```gulp browser-sync``` task starts a browser-sync instance that serves files from the ```roots/public``` directory. Note that the browser-sync server runs substancially slower than Roots native server, Static. It is advisable to run Static when building your site, and use browser-sync when your testing your site across devices and browsers.

## Using Roots
Although it is possible to run gulp tasks in Juice-Bar, it is also possible to work on your website without so using so much as a single gulp task. From the command-line, change into the ```/roots``` directory and work on your website as if it's an ordinary roots project. Visit the [roots website](http:roots.cx) for details.
