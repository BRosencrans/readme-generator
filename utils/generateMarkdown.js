

//generates markdown layout
function generateMarkdown(data) {
  return  `# ${data.title}
  
  ## Description
  ${data.description}
    
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#Collaborators)
  - [Tests](#Tests)
  
    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
 
  ## Collaborators
  ${data.thanks}
    
  ## Tests
  ${data.tests}`
  
}


module.exports = generateMarkdown;
