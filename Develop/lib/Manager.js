// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
class Manager extends Employee {
      constructor (name, id, email) {
           super();
            this.name = name
            this.id = id
            this.email = email
           this.officeNumber = 100
            this.getName = () => {
                return this.name;
              },
              this.getId = () => {
                return this.id;
              },
            this.getEmail = () => {
                return this.email;
            },
            this.getOfficeNumber = () => {
                return this.officeNumber;
            }
           
            this.getRole = () => {
                return "Manager";
            }
            
            
        }
    
    }

module.exports = Manager;