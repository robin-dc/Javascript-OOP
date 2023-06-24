class User {
  constructor(name) {
    this.name = name;
    // under the hood
    // this.changeName = this.changeName.bind(this);
  }

  changeName = (newName) => {
    this.name = newName;
    return this.name;
  }
}

module.exports = User;
