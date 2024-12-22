class toDoTask {
  constructor(initialArray = ["workout", "shopping"]) {
    this.data = initialArray;
  }

  create = (task) => {
    this.data.push(task);
    console.log(`"${task}" added in to task list.`);
  };

  read = () => {
    console.log("Current Tasks:");
    this.data.forEach((item, index) => {
      console.log(index + 1 + ": " + item);
    });
  };

  update = (index, newValue) => {
    if (index >= 0 && index < this.data.length) {
      var oldValue = this.data[index];
      this.data[index] = newValue;
      console.log(oldValue + " is replace by " + newValue);
    } else {
      console.log("Invalid index!");
    }
  };

  delete = (index) => {
    if (index >= 0 && index < this.data.length) {
      var removedValue = this.data.splice(index, 1);
      console.log(removedValue + " deleted!");
    } else {
      console.log("Invalid index!");
    }
  };
}

const toDoList = new toDoTask();

// toDoList.create("lunch")
// toDoList.read()
// toDoList.update(2,'dinner')
// toDoList.delete(2)
