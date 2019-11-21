class UserList {
  constructor([...users]) {
    this._users = users;
    this.finalUserId = this._users.length;
  }

  get users() {
    return this._users;
  }

  set users([...users]) {
    this._users = users;
  }

  showNames () {
    let userNames = "Users: ";
    this._users.map(name => userNames = userNames + name.firstName + '  ');
    console.log(userNames);
    return this;
  }

  showFullInfo({ id, firstName, lastName, age }) {
    return `User - ${firstName} ${lastName} with id (${id}) is ${age} years old.`;
  }

   showById (id) {
        this._users.map(user => {
          if (user.id === id) {
            console.log(this.showFullInfo(user));
          }
          return this;
        });
   }

  add({ firstName, lastName, age }) {
    if (this.firstName === undefined) {
      console.log('It is required to set the firstName.');
    }
      let newUser = {
        id: this.finalUserId++,
        firstName,
        lastName,
        age
      };
      this._users.push(newUser);
      console.log(`Hi everyone, i am ${firstName}`);
    }
  
    removeById(id) {
      if (this._users.findIndex(val => val.id === this.id) !== -1) {
        console.log(`bye bye ${this._users.firstName}`);
        let removeIndex = this._users.map(item => item.id).indexOf(this.id);
        this._users.splice(removeIndex, 1);
      } else {
        console.log(`Unable to find the user with id: ${id}`);
      }
    }

  logUsersCould() {
    console.log(`The count of all users: ${this._users.length}`);
    return this;
  }
}

let myList = new UserList([
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 44
  },
  {
    id: 2,
    firstName: "Adam",
    lastName: "White",
    age: 31
  },
  {
    id: 3,
    firstName: "Jessica",
    lastName: "Black",
    age: 27
  }
]);

  myList.showNames();
  myList.showById(2);
  myList.add({ firstName: "Ann", lastName: "Fox", age: 19 });
  myList.showNames();
  myList.add({ firstName: "Jack" });
  myList.showNames();
  myList.removeById(3);
  myList.logUsersCould

console.log(myList.users);
