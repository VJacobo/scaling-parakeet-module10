// setting up the constant variables in the server.js
//pulling express, inquirer, and the file system.
// setting up the shapes.js as a constant variable when pulling code information.
const express = require('express');
const inquirer = require('inquirer');
const fs = require('fs');
const { Shape, Triangle, Circle, Square } = require('./lib/shapes');

// Setting up the variable to pull express.
// Will be able to be heard on port 3000.
const app = express();
const port = 3000;

// Used to parse the json data, and URLencoded form data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));