
const Employee = require('./employee.js')

class Manager extends Employee{
    constructor(name, salary, title, manager=null, employees=[]){
        super(name, salary, title)
        this.manager = manager
        this.employees = employees
        if(manager){
            manager.addEmployee(this)
        }
    }

    addEmployee(employee){
        this.employees.push(employee)
    }

    _totalSubSalary(){
        let sum = 0
        // console.log("EMPLOYEES: ",e, "WITH SALARIES: ", sum)

        this.employees.forEach(employee => {
            if(employee instanceof Manager){
                // let array = employee.employees   // CHECKS IF THE EMPLOYEES INSTANCES ARE INSIDE THE ARRAY
                // console.log(array)
                // console.log(sum)
                // console.log(employee)    // CHECKS IF THE EMPLOYEE IS A INSTANCE OF THE MANAGER
                sum += (employee.salary + (employee._totalSubSalary()))
                // THIS KEYWORD REFERS TO THE OBJECT IN THE LEFT SIDE IF GIVEN
                // IF NOT IT WILL FIND OUTER SCOPE FOR AN OBJECT
            }
            else{
                sum += employee.salary
                // console.log(sum)
            }
        })
        // console.log("SUM:",e, sum)

        return sum
    }

    calculateBonus(multiplier){
        let sum = this._totalSubSalary() + this.salary
        return sum * multiplier
    }
}
// splinter = new Manager('Splinter', 100000, 'Sensei');
// leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);

// console.log(mikey.calculateBonus(0.05)); // => 4250
// console.log(leo.calculateBonus(0.05)); // => 8750
// console.log(splinter.calculateBonus(0.05)); // => 13750

try{
    module.exports = Manager
}
catch{
    module.exports = null
}
