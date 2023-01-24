// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ## Table of Contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  ${data.License}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## Questions
  ${data.Email}
  ${data.Github}

`;
}

module.exports = generateMarkdown;
