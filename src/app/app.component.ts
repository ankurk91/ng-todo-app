import {Component} from '@angular/core';
import {Task} from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = null;

  tasks: Task[] = [
    {name: 'Task 1', date: new Date(), completed: false},
    {name: 'Task 2', date: new Date(), completed: true},
    {name: 'Task 3', date: new Date(), completed: false},
  ];

  toggleCompleted(item) {
    item.completed = !item.completed;
  }

  addTask() {
    console.log('addTask was called');

    this.tasks.push({
      name: this.newTask,
      date: new Date(),
      completed: false
    });

    // Reset input value
    this.newTask = null;
  }

  deleteTask(index) {
    if (confirm("Are you sure to delete?")) {
      this.tasks.splice(index, 1);
    }
  }

  formatDate(date) {
    return date.toLocaleDateString('en-US');
  }
}
