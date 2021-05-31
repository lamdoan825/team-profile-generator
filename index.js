const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const dist_dir = path.resolve(__dirname, 'output');
const outputPath = path.join(dist_dir, 'index.html');

const render = require('./src/page-template');

const teamArr = [];
const idArr = [];

// Function to start app
function indexMenu() {

}

indexMenu();