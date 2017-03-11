# Penny-Bite

To be created based on nodejs tutorial with Heroku

A barebones Node.js app using [Express ](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git clone https://github.com/dukeng/Penny-Bite.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Can use "$ heroku local web" to run a local version of the app 

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

Talk to Duke first before you deploy to Heroku. It is best to have only one machine deploying to Heroku. Test it locally if you can

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Some notes for developers

- Procfile: basically what Heroku will execute upon successful push to heroku master
- Whenever we want to add a new module (such as express), we have to do the following:
$ npm install --save --save-exact cool-ascii-faces
Modify index.js so that it requires this module from the start: "var cool = require('cool-ascii-faces');"
Run "$ npm install" and "$ heroku local" again.
- If we want to add an environmental variable (Config vars), follow instruction at: [Config vars](https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars)
- If a developer wants to modify live postgres database or run the server locally, he needs to have postgres installed locally. Info at: 
[Postgres setup locally](https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)