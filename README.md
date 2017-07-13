# React & Rails Blog

[Live Demo](https://react-rails-blog.herokuapp.com/).

This is a simple blog app using React and Node on the front end and a Rails 5 API back end.

* Axios
* Babel
* Rails 5 API (w/Postgres)
* React
* React Router
* Redux
* Redux Form
* Semantic UI
* Webpack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is the front end, a Rails 5 API back end must also be run which is at [React & Rails Blog API](https://github.com/ScottyLiebs/react-rails-blog-api.git).

Steps to run:
- install node and npm
- git clone https://github.com/ScottyLiebs/react-rails-blog.git
- cd react-rails-blog
- npm install
- npm start

Back end:
- install Rails 5 and Ruby 2.4
- git clone https://github.com/ScottyLiebs/react-rails-blog-api.git
- cd react-rails-blog-api
- bundle
- rake db:create
- rake db:migrate
- rails s -p 3001

Front end will start up on localhost:3000 and configured for an API at localhost:3001 so be sure to run the Rails API on port 3001.

Enjoy!
