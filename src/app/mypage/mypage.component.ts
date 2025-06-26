import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Task, TaskService } from '../services/task.service';
import { AuthService } from '../services/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatDialogModule,
    MatListModule, MycomponentComponent,
    SecondComponent
  ],
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.tasks$ = this.taskService.tasks$;
  }

  ngOnInit(): void {
  }

  onNewTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '450px',
      data: null
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.taskService.addTask(result); }
    });
  }

  onEditTask(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '450px',
      data: { ...task }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.taskService.updateTask(result); }
    });
  }

  onDeleteTask(taskId: string): void {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.taskService.deleteTask(taskId);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
