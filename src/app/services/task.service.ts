import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'Pendente' | 'Em Andamento' | 'Concluído';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private tasks = new BehaviorSubject<Task[]>([
    { id: uuidv4(), title: 'Tarefa 1', status: 'Concluído' },
    { id: uuidv4(), title: 'Tarefa 2', description: 'Descrição da Tarefa 2.', status: 'Em Andamento' },
    { id: uuidv4(), title: 'Tarefa 3', status: 'Pendente' },
  ]);

  tasks$ = this.tasks.asObservable();

  getTaskById(id: string): Observable<Task | undefined> {
    return this.tasks$.pipe(map(tasks => tasks.find(task => task.id === id)));
  }

  addTask(taskData: Omit<Task, 'id' | 'status'>): void {
    const currentTasks = this.tasks.getValue();
    const newTask: Task = { id: uuidv4(), ...taskData, status: 'Pendente' };
    this.tasks.next([...currentTasks, newTask]);
  }

  updateTask(updatedTask: Task): void {
    const currentTasks = this.tasks.getValue();
    const index = currentTasks.findIndex(task => task.id === updatedTask.id);
    if (index > -1) {
      currentTasks[index] = updatedTask;
      this.tasks.next([...currentTasks]);
    }
  }

  deleteTask(id: string): void {
    const currentTasks = this.tasks.getValue();
    this.tasks.next(currentTasks.filter(task => task.id !== id));
  }
}
