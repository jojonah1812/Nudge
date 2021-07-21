// TODO: Include packages needed for this application
//node packages loaded
const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];
const generateReadMe = (answers) => {

    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your project title?',
                name: 'title',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                message: 'What is the project description?',
                name: 'description',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                message: 'What is required to install the application, enter None if nothing required.',
                name: 'installation',
                validate: (value)=>{ if(value){return true} else {return 'a value must be entered to continue'}}
            },
            {
                type: 'input',
                message: 'What is the usage information you want to include?',
                name: 'usage',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                message: 'What are the contribution guidelines?',
                name: 'contributions',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                message: 'What are the test instructions?',
                name: 'tests',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Are there any credits for this project?',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'list',
                name: 'license',
                message: 'What is your license type?',
                choices: ["MIT", "Apache", "GPL"],
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your Github username?',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address?',
                validate: (value) => { if (value) { return true } else { return 'a value must be entered to continue' } }
            },

        ])

        .then((answers) => {

         const readmePageContent = `

    # Title 
    ${answers.title}

    # Table of Contents

     - [Description] (#description)
     - [Installation](#installation)
     - [Usage](#usage)
     - [Contribution](#contributions)
     - [Tests](#tests)
     - [Credits](#credits)
     - [License](#license)
     - [Questions](#questions)

    ## Description
     [![License](https://img.shields.io/badge/License-${answers.license}-blue.svg "License Badge)]

     ${answers.description}

    ## Installation:
     ${answers.installation}

     ## Usage:
     ${answers.usage}

     ## Contribution:
     ${answers.contributions}

     ## Tests:
     ${answers.tests}

     ## Credits:
     ${answers.credits}
     
     ## License:
     ${answers.license}
        For additional licensing information, please click the link displayed below:

        <https://img.shields.io/badge/License-${answers.license}-blue.svg> "License Badge"

        
     ## Questions:
        The link below will take you to my Github Profile for additional details:

       <https://github.com/${answers.username}>
    
        If there are any additional questions, plse contact me at:  
        <${answers.email}>

    `
            console.log(answers);
         //   const readmePageContent = generateReadMe(answers);


            fs.writeFile('README.md', readmePageContent, (err) =>
                err ? console.log(err) : console.log('README.md file created successfully!')

            )
        })

    }

    // TODO: Create a function to initialize app
    function init() {generateReadMe()} 

    // Function call to initialize app
    init();
