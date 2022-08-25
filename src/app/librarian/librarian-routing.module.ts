import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LibrarianComponent } from './librarian.component';
import { NoticeComponent } from './notice/notice.component';
import { ProfileComponent } from './profile/profile.component';
import { TopStudentComponent } from './top-student/top-student.component';

const routes: Routes = [
  {path:'',component:LibrarianComponent,children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'books',component:BooksComponent},
    {path:'rankers',component:TopStudentComponent},
    {path:'notice',component:NoticeComponent},
    {path:'profile',component:ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrarianRoutingModule { }
