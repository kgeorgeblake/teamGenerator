
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");//find folder output in this directory
const outputPath = path.join(OUTPUT_DIR, "team.html");
const employees = [];
const render = require("./lib/htmlRenderer");

fs.writeFile (path.joinOUTPUT_DIR/outputPath), (page_html);
  //render and put array into html
  //const page_html = render (employees);
  //write everything you have to the output
 // fs.writeFile (path.joinOUTPUT_DIR/outputPath), page_html),
  
  //second argument of write file
  //in last week's homework
  //fs.writeFile(name of file, method)
  


const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
      },
      {
      type: "input",
      message: "What is your email?",
      name: "email"
      },

     {
        type: "input",
        message: "What is your ID?",
        name: "id"
    },

    
  ]);
}



function generateHTML(answers) {
return`# ${answers.name}
## email
${answers.email}
## id
${answers.id}

`
;
}

promptUser()
  .then(function(answers) {
    const readme = generateHTML(answers);
    return writeFileAsync("team.html", HTML);
  })
  .then(function() {
    console.log("Successfully wrote to team.html");
  })
  .catch(function(err) {
    console.log(err);
  }); 

 
  
render(employees.push()); 


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

