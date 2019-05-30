import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Input() index: bigint;

  @Output() clickedDelete: EventEmitter<any> = new EventEmitter();
  @Output() clickedToggle: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.clickedDelete.emit(this.index);
  }

  onToggle() {
    this.clickedToggle.emit(this.task);
  }

  formatDate(date) {
    return new Date(date).toLocaleDateString('en-US');
  }

}
