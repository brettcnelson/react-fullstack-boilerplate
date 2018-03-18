# react-fullstack-boilerplate

###[create-react-app](https://github.com/facebook/create-react-app) + react-router + express proxy api server + working mongo CRUD -- preconfigured to deploy to Heroku###

[install mongoDB](https://docs.mongodb.com/manual/installation/) if you don't have it, then in in the terminal run:
```
mongod
```

in a different terminal window, if you don't have nodemon installed run:
```
npm install -g nodemon
```

once you have nodemon, run:
```
git clone https://github.com/brettcnelson/react-fullstack-boilerplate.git
npm run setup
```

this installs node modules for the client and the server, and starts the app.

in the future, run:
```
npm start
```
to start the app.

to deploy to Heroku make sure you have an [account](https://www.heroku.com/) and the [CLI](https://devcenter.heroku.com/articles/heroku-cli).

commit all changes to git, then:
```
heroku create
heroku config:set MONGO_URI=your-remote-mongo-uri
heroku push origin master
```

if you don't have a remote mongo databse, [mLab](https://mlab.com/signup/) is very easy to setup.
