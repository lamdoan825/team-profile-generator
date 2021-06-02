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
function initApp() {
  
  // Prompt user to create a manager when application starts
  function addManager() {
    console.log("Start building your team profile");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What's manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the team's manager's name.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What's the manager's ID?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid Manager's ID.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What's the manager's email?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Email address can't be empty.";
        }
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's the manager's office number? (format: 111111111)",
        validate: answer => {
          const pass = answer.match(
          );
          if (pass) {
            return true;
          }
          return "Please enter a correct phone number.";
        }
      }
  ]).then(answers => {
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArr.push(manager);
    idArr.push(answers.managerId);
    addTeam();
  });
}

  // addTeam function after finish with addManager
  function addTeam() {
    inquirer.prompt([
      {
        type: "list",
        name: "memberChoice",
        message: "What would you like to add next?",
        choices: [
          "Engineer",
          "Intern",
          "End application"
        ]
      }
    ]).then(userChoice => {
      switch (userChoice.memberChoice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          generateHTML();
      }
    });
  }

  // add an Engineer when selected
  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What's the engineer's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Engineer's name can't be left empty.";
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "What's the engineer's id?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a valid Engineer's ID.";
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What's the engineer's email?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Email address can't be empty.";
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What's the engineer's GitHub username?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter the engineer's GitHub username.";
        }
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArr.push(engineer);
      idArr.push(answers.engineerId);
      addTeam();
    });
  }
  addManager();

}
initApp();