import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = null;

  tasks = [
    {name: "Task 1", date: new Date(), completed: false},
    {name: "Task 2", date: new Date(), completed: true},
    {name: "Task 3", date: new Date(), completed: false},
  ];


  toggleCompleted(item) {
    item.completed = !item.completed
  }

  addTask() {
    console.log("addTask was called");

    this.tasks.push({
      name: this.newTask,
      date: new Date(),
      completed: false
    });

    this.newTask = null
  }

  deleteTask(index) {
    this.tasks.splice(index, 1)
  }

  formatDate(date){
    return date.toLocaleDateString("en-US")
  }
}
