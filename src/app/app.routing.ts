import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './tasks/addtasks.component';
const router:Routes=[

{path:'',redirectTo:'/allTask',pathMatch:'full'},
{path:'allTask',component:TasksComponent },
{path:'addTask',component:AddtasksComponent }
];
export const routes=RouterModule.forRoot(router);