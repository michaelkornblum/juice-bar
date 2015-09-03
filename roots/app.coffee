accord          = require 'accord'
axis            = require 'axis'
rupture         = require 'rupture'
autoprefixer    = require 'autoprefixer-stylus'
js_pipeline     = require 'js-pipeline'
css_pipeline    = require 'css-pipeline'
# user added modules
dynamic_content = require 'dynamic-content'
_               = require 'underscore'
moment          = require 'moment'
s               = require 'underscore.string'
typographic     = require 'typographic'
jeet            = require 'jeet'
lost            = require 'lost'
postcss         = accord.load 'postcss'


module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl', out: '/css/master.css'),
    dynamic_content()
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer(), typographic(), jeet()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  postcss:
    use: [lost()]

  jade:
    pretty: true
    _ : _
    moment: moment
    s: s

  locals:
    title: "Michael Kornblum"
    description: "the blog / portfolio site of Michael Kornblum"
    author: "Michael Kornblum"
    pages: [
      {
        title: "home",
        href: "/index.html"
      },
      {
        title: "portfolio"
        href: "/portfolio.html"
      },
      {
        title: "blog"
        href: "/blog.html"
      },
      {
        title: "contact"
        href: "/contact.html"
      }
    ]
