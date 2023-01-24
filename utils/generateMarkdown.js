

//generates markdown layout
function generateMarkdown(data) {
  return  `# ${data.title}
  
  ## Description
  ${data.description}
    
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#Collaborators)
  - [License](#License)
  - [Tests](#Tests)
  
    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
 
  ## Collaborators
  ${data.thanks}
  
  ## License
  ![badge](https://img.shields.io/badge/license-${data.licenseType}-green)
  
  ## Tests
  ${data.tests}
  
  ## Questions?
    My github page is here [${data.github}](https://github.com/${data.github})`
}


module.exports = generateMarkdown;
