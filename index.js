const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'Project name:'
},
{
    type: 'input',
    name: 'Description',
    message: 'Project description:'

},
{
    type: 'input',
    name: 'Installation',
    message: 'Installation instructions:'
},
{
    type: 'input',
    name: 'Usage',
    message: 'Usage Information:'
},
{
    type: 'input',
    name: 'Contributing',
    message: 'Contributing Guidelines:'
},
{
    type: 'input',
    name: 'Tests',
    message: 'Test Instructions:'
},
{
    type: 'list',
    name: 'License',
    message: 'License?',
    choices:['No license', 'MIT', 'GNU GPLv3']
}
];


// function to initialize program
function init() {
    return inquirer.prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data)

        fs.writeFile('Readme.md', markdown, function (err) {
            if (err) {
                console.log('File could not be saved', err)
            } else {
                console.log('Your file was saved!')
            }
        })
        })
    .catch((err) => {
        console.log(err)
    })
}

// function call to initialize program
init();
