// function to generate markdown for README
function generateMarkdown(data) {

  function licenseBadge(License) {
    const badges = {
      GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }

    return badges[License]
  }

  return `
  # ${data.Title}

  ## ${licenseBadge(data.License)}

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
  For additional questions, please contact us at ${data.Email}
  \n
  ${data.Github}

`;
}

module.exports = generateMarkdown;
