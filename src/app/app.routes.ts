import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MypageComponent } from './mypage/mypage.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "mypage",
        component: MypageComponent
    },
    {
    path: 'tasks/share/:id',
    component: TaskDetailComponent, canActivate: [authGuard]
  }
];
