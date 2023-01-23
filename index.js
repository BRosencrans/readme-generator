// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter the title of your project",
            name: 'title',
         },
         {
            type: 'input',
            message: "Please enter a description of your project",
            name: 'description',
         },
         {
            type: 'input',
            message: "Please enter installation guide for your project(if needed)",
            name: 'installation',
         },
         {
            type: 'input',
            message: "Please enter any usage information needed for your project",
            name: 'usage',
         },
         {
            type: 'input',
            message: "Please enter any collaborators or thank yous here",
            name: 'thanks',
         },
         {
            type: 'input',
            message: "Please enter any testing information here",
            name: "tests",
         }
    ])

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
