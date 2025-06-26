import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/task.service';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mycomponent',
  standalone: true,
  imports: [
    CommonModule, MatListModule, MatChipsModule, MatIconModule,
    MatButtonModule, MatSnackBarModule
  ],
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  @Input() task!: Task;
  @Output() editRequest = new EventEmitter<Task>();
  @Output() deleteRequest = new EventEmitter<string>();

  constructor(private snackBar: MatSnackBar) {}

  onEdit(): void { this.editRequest.emit(this.task); }
  onDelete(): void { this.deleteRequest.emit(this.task.id); }
  onShare(): void {
    const link = `${window.location.origin}/tasks/share/${this.task.id}`;
    navigator.clipboard.writeText(link).then(() => {
      this.snackBar.open('Link de compartilhamento copiado!', 'Fechar', { duration: 2000 });
    });
  }
}
