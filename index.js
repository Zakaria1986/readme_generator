const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Project name:'
},
{
    type: 'input',
    name: 'description',
    message: 'Project description:'

},
{
    type: 'input',
    name: 'installation',
    message: 'Installation instructions:'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage Information:'
},
{
    type: 'input',
    name: 'contributin',
    message: 'Contributing Guidelines:'
},
{
    type: 'input',
    name: 'tests',
    message: 'Test Instructions'
}
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

console.log(questions);
