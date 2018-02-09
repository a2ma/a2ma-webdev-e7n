# YelpCamp
* Add landing page
* Add page that lists all the campgrounds

Each Campground has:
* Name
* Image
* Description

## Layout and Basic Styling
* Partials
* Basic Bootstrap

## Creating New Campgrounds
* Set up new campground POST route
* Add in the body-parser
* Set up route to show form
* Add basic, unstyled form

## Style Campgrounds Page
* Add a better title/header
* displays campgrounds in a grid

## MongoDB
* Install and configure MongoDB
* Set up campground model
* use campground model in routes

## Show Page
* Review RESTful routes covered so far
* Add description to campground model
* Show db.collection.drop()
* add show route/template

RESTful Routes
name  | url    | verb
========================
INDEX | /x     | GET
NEW   | /x/new | GET
CREATE| /x     | POST
SHOW  | /x/:id | GET


## Refactor Mongoose Code
* Create a models directory
* Use module.exports
* require all requirements correctly

## Seeds
* add a seeds.js file
* require seeds file every time the server starts

## Add Comment Model
* Make error go away
* display comments on campgrounds show page

## Comment New/Create
* Discuss nested routes
* Add comment new and create routes
* Add new comment form

## Style the Show Page
* Add sidebar to show page
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Auth pt. 1 - Add user model
* Install all packages needed for auth
* Define User Model

## Auth pt. 2 - Configure Registration
* Configure passport
* Add register routes
* Design register interface

## Auth pt. 3 - Login
* add login routes
* add login template

## Auth pt. 4 - Logout/Navbar
* add logout routes
* prevent commenting for users not signed in
* add links to navbar
* show/hide auth links correctly

## Refactor Routes
* Use Express router to refactor routes

## Users + Comments
* Associate users and comments
* save author's name to comment automatically

## Users + Campgrounds
* prevent unathenticated user from creating a campground
* save username+id to each newly created campground

