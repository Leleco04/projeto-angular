import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../services/task.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() tasks: Task[] = [];

  // Retorna a contagem de tarefas por status
  get pendingCount(): number {
    return this.tasks.filter(t => t.status === 'Pendente').length;
  }

  get inProgressCount(): number {
    return this.tasks.filter(t => t.status === 'Em Andamento').length;
  }

  get completedCount(): number {
    return this.tasks.filter(t => t.status === 'Concluído').length;
  }
}
