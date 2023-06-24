
class Employee{
    constructor(name, salary, title, manager=null){
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if(manager){
            manager.addEmployee(this)
        }
    }
    calculateBonus(multiplier){
        return (this.salary) * multiplier
    }
}
// CHECK IF YOU CAN CREATE AN INSTANCE
// const leo = new Employee('Leonardo', 90000, 'Ninja');
// console.log(leo)

// CHECK FOR BONUS
// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750

try {
    module.exports = Employee;
} catch {
    module.exports = null;
}
