// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");
class Intern extends Employee {
      constructor (name, id, email) {
           super();
            this.name = name
            this.id = id
            this.email = email
           this.school = "UCLA"
            this.getName = () => {
                return this.name;
              },
              this.getId = () => {
                return this.id;
              },
            this.getEmail = () => {
                return this.email;
            },
            this.getSchool = () => {
                return this.school
            }
           
            this.getRole = () => {
                return "Intern";
            }
            
            
        }
    
    }

module.exports = Intern;




