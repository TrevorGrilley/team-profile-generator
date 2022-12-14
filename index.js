const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/generatePage');

const questions = [
    {
        type: 'input',
        message: "Please enter your team name",
        name: 'teamName',
    },
    {
        type: 'input',
        message: "Please enter your teams ID",
        name: 'teamID',
    },
    {
        type: 'input',
        message: "Please enter your teams email",
        name: 'teamEmail',
    },
    {
        type: 'input',
        message: "Please enter your teams office number",
        name: 'teamOfficeNumber',
    },
    {
        type: 'list',
        message: 'Please enter what team member you would like to add',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'None',
        ],
    },

];

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter your engineers name",
        name: 'engineerName',
    },

    {
        type: 'input',
        message: "Please enter your engineers ID number",
        name: 'engineerId',
    },

    {
        type: 'input',
        message: "Please enter your engineers email",
        name: 'engineerEmail',
    },

    {
        type: 'input',
        message: "Please enter your engineers Git Hub username",
        name: 'engineerGithub',
    },

    {
        type: 'list',
        message: 'Please enter what team member you would like to add',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'None',
        ],
    },
];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter your interns name",
        name: 'internName',
    },
    {
        type: 'input',
        message: "Please enter your interns ID number",
        name: 'internId',
    },
    {
        type: 'input',
        message: "Please enter your interns email",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "Please enter your interns school",
        name: 'internSchool',
    },
    {
        type: 'list',
        message: 'Please enter what team member you would like to add',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'None',
        ],
    },
]

const managerQuestions = [
    {
        type: 'input',
        message: "Please enter your managers name",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "Please enter your managers ID number",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "Please enter your managers email",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "Please enter your managers school",
        name: 'managerSchool',
    },
    {
        type: 'list',
        message: 'Please enter what team member you would like to add',
        name: 'teamMember',
        choices: [
            'Engineer', 'Intern', 'None',
        ],
    },
]

const writeFile = data => {
    console.log(data);
    fs.writeFile('./dist/index.html', data, err => {
        if(err){
            console.log(err);
            return;
        }
    })
}

promptManager()
.then(promptEmployee)
.then(teamMembers => generatePage(teamMembers))
.then(pageHTML => writeFile(pageHTML))