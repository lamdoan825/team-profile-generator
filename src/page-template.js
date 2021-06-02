// Export function to generate HTML page
module.exports = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 jumbotron mb-3 team-heading">
          <h1 class="text-center">The Dream Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
          ${createProfile(team)}
        </div>
      </div>
    </div>
  </body>

  </html>
  `;
};

// Create Team Profile
const createProfile = team => {

  // Create Manager Profile
  const createManager = manager => {
    return `
    <div class="card employee-card manager-card">
      <div class="card-header text-center">
        <h2 class="card-title">${manager.getName()}</h2>
        <h4 class="card-title">Title: ${manager.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group text-dark">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
        </ul>
      </div>
    </div>
    `;
  };

  // Create Engineer Profile
  const createEngineer = engineer => {
    return `
    <div class="card employee-card engineer-card">
      <div class="card-header text-center">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h4 class="card-title">Title: ${engineer.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group text-dark">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>
        </ul>
      </div>
    </div>
    `;
  };

  // Create Intern Profile
  const createIntern = intern => {
    return `
    <div class="card employee-card intern-card">
      <div class="card-header text-center">
        <h2 class="card-title">${intern.getName()}</h2>
        <h4 class="card-title">Title: ${intern.getRole()}</h4>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group text-dark">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
  };
}