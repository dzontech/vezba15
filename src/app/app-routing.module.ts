import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentsingleComponent } from './studentsingle/studentsingle.component';

const routes: Routes = [
  {
    path: 'student', component: StudentComponent
  },
  {
    path: 'student/:id', component:StudentsingleComponent
  },
  {
    path: '', redirectTo: 'student', pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
