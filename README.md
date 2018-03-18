# react-fullstack-boilerplate

### [create-react-app](https://github.com/facebook/create-react-app) + react-router + express proxy api server + working mongo CRUD with mongoose -- preconfigured to deploy to Heroku ###

##### SETUP and INSTALLATION #####

[install mongoDB](https://docs.mongodb.com/manual/installation/) if you don't have it, then in in the terminal run:
```
mongod
```

open a different terminal window. If you don't have nodemon installed run:
```
npm install -g nodemon
```

once you have nodemon, run:
```
git clone https://github.com/brettcnelson/react-fullstack-boilerplate.git
cd react-fullstack-boilerplate/
npm run setup
```

this installs node modules for the client and the server, and starts the app.

##### USAGE #####

in the future, run:
```
npm start
```
to start the app.

##### DEPLOYMENT #####

to deploy to Heroku make sure you have an [account](https://www.heroku.com/) and the [CLI](https://devcenter.heroku.com/articles/heroku-cli).

commit all changes to git, then:
```
heroku create
heroku config:set MONGO_URI=**_your-remote-mongo-uri_**
heroku push origin master
```

if you don't have a remote mongo databse, [mLab](https://mlab.com/signup/) is very easy to setup.
