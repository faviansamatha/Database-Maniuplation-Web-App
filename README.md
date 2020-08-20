











<h1>WELCOME!!!</h1>
<a href="https://fierce-anchorage-58845.herokuapp.com/">Click Here!</a> <br>
<p>Welcome to the beta version of our employee management system. Please take a look around the website.
    Feel free to add, edit, or delete any of the users!<br>

Here is a list of features and how to use each page:<br>
<emp style="font-size:30px;">1) Edit Database: </emp><br>
- We can add users. ALL FIELDS ARE REQUIRED (there are validations on a field. Try adding a user with an incomplete field) <br>
- The add user form will fail if the id of the new user already exists. You will be redirected to an ERROR page.<br>
- You will also be redirected to a success page if you succesfully added someone. <br>
- We can edit users. The dropdown User ID is a list of all existing ids. <br>
- In edit users, only the Person's ID is required! Any null or blank field will not alter the user. That is, only the fields that aren't blank will be updated
- We can delete a user if needed. Just select the Person's ID.
- I used RegEx to parse through the string to make sure there aren't any single quotes in the textarea.
<br>
<emp style="font-size:30px;"> 2) View Our Team! Page:</emp> <br>
- We represent people's size, height, favourite colour, and group them by their employment type. Click on their names for more info about them! This is the only way to see their bio! <br>
<emp style="font-size:30px;">3) View Database Page:</emp>  <br>
- Here we can see the complete table from the database. Click on the "user id" field to see their bios just like the previous page!<br>
- We can also filter the table if the list gets too long. The User ID field is an EXACT MATCH. Everything else is an "include" statements.
They are all joined by an "AND" condition. So if I searched for Bob in the first name, and do Min age = 5. Then the result would be people
whose first name contains Bob (so Bobby would show up) with an age greater than or equal to 5. 
<br>
<br>
Coded by: Favian (Ian) Samatha
<br>
<br>







<!-- # node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets) -->
