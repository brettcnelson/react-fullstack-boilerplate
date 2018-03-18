# react-fullstack-boilerplate

create-react-app + react-router + express proxy api server + working mongo CRUD -- preconfigured to deploy to Heroku

install mongo if you don't have it, then in in the terminal run:
  mongod
in a different terminal window run:
  git clone https://github.com/brettcnelson/react-fullstack-boilerplate.git
  npm install
  cd client/
  npm install
  cd ..
  npm start

to deploy to Heroku, git commit all changes, then:
  heroku create
  heroku config:set MONGO_URI=your-remote-mongo-uri
  heroku push origin master
