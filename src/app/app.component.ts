import {Component, OnInit} from '@angular/core';
import {Task} from './Task';
import {LocalStorageService} from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask = null;

  tasks: Task[] = [];

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.tasks = this.localStorageService.fetch('tasks', []);
  }

  addTask() {
    console.log('addTask was called');

    // todo validate input
    this.tasks.push({
      name: this.newTask,
      date: new Date(),
      completed: false
    });

    // Reset input value
    this.newTask = null;

    this.localStorageService.save('tasks', this.tasks);
  }

  deleteTask(index) {
    if (confirm('Are you sure to delete?')) {
      this.tasks.splice(index, 1);
      this.localStorageService.save('tasks', this.tasks);
    }
  }

  toggleCompleted(item) {
    item.completed = !item.completed;

    this.localStorageService.save('tasks', this.tasks);
  }

}
