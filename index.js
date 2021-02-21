const inquirer = require('inquirer');
const fs = require('fs');
const requiredQuestion = async (input) => {
    if (input === "") {
       return 'This question is required';
    }
    return true;
  };

// Function created to ask questions
inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description',
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'Who do you credit this work to?',
        name: 'credit',
        validate: requiredQuestion,
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
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'Guidelines for other developers to contribute.',
        name: 'contributing',
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: requiredQuestion,
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: requiredQuestion,
      },
           
  ])

  .then((answers) => {

    const readMeContent = `
    # ${answers.project_name}

  ## Table of Contents
  * [Description](#Description)
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
     This project is licensed under ${response.license}
  ## Contributing
     ${answers.contributing}
  ## Tests
        How to run tests:
        ${answers.test_instructions}

  ## Questions
     *For futher questions check out my github profile:
     https://github.com/${answers.username}
     
     * I can also be reached at ${answers.email}

     `;
  

    fs.writeFile(readme, readMeContent, (err) =>
                err ? console.log(err) : console.log('Success!')
            );
        });
