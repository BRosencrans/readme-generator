// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const newMarkdown = require ('./utils/generateMarkdown.js')
// question array
const answers = [
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
      type: 'list',
      message: "Please pick a license if you are using one",
      choices: ["MIT", "GPL", "CC", "ISC", "WTFPL", "None"],
      name: 'licenseType',
   },
    {
       type: 'input',
       message: "Please enter any testing information here",
       name: "tests",
    }
]



//Function to initialize
function init() {
   inquirer .prompt(answers).then(function(newAnswers) {
      
      const mrkDownData = newMarkdown(newAnswers)
//writes new readme 
         fs.writeFile('README.md', mrkDownData, function(err) {
               if (err){
   console.log(err)
}
else {
   console.log("Enjoy your new README")
}})
},
)}

// Function call to initialize app
init();
