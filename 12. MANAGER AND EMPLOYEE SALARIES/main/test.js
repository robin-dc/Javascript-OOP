// | Name     | Salary  | Title      | Boss   |
// | -------- | ------- | ---------- | ------ |
// | Hobbes   | 1000000 | Founder    | null   |
// | Calvin   | 130000  | Director   | Hobbes |
// | Susie    | 100000  | TA Manager | Calvin |
// | Lily     | 90000   | TA         | Susie  |
// | Clifford | 90000   | TA         | Susie  |

// If Hobbes gets a bonus multiplier of 0.05, their bonus will be $70,500.

// If Calvin gets a bonus multiplier of 0.05, their bonus will be $20,500.

// If Susie gets a bonus multiplier of 0.05, their bonus will be $14,000.

// If Lily gets a bonus multiplier of 0.05, their bonus will be $4,500.

// If Clifford gets a bonus multiplier of 0.05, their bonus will be $4,500.

const Employee = require('../main/employee');
const Manager = require('../main/manager');

const Hobbes = new Manager("Hobbes", 1000000, "Founder")
const Calvin = new Manager("Calvin", 130000, "Director", Hobbes)
const Susie = new Manager("Susie", 100000, "TA Manager", Calvin)
const Lily = new Employee("Lily", 90000, "TA", Susie)
const Clifford = new Employee("Clifford", 90000, "TA", Susie)

console.log(Hobbes.calculateBonus(0.05))
console.log(Calvin.calculateBonus(0.05))
console.log(Susie.calculateBonus(0.05))
console.log(Lily.calculateBonus(0.05))
console.log(Clifford.calculateBonus(0.05))
