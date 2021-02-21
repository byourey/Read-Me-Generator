const inquirer = require('inquirer');
const fs = require('fs');


// Function created to ask questions
inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Who do you credit this work to?',
        name: 'credit',
      },
      {
        type: 'checkbox',
        message: 'Please choose a license',
        name: 'license',
        choices: [
            'Apache 2.0',
            'GNU',
            'ISC',
            'MIT',
        ],
      },
      {
        type: 'input',
        message: 'Guidelines for other developers to contribute.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
           
  ])

  .then((answers) => {

    const readMe = `
# ${answers.title}

 
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description: 
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credit}

  ## License
  ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.test}

  ## Questions
     *For futher questions check out my github profile:
      https://github.com/${answers.username}
     
     * I can also be reached at ${answers.email}

     `;
  

    fs.writeFile('read-me.md', readMe, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
