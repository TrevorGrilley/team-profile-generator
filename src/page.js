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

