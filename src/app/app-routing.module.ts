import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';


const routes: Routes = [
  {path:'',loadChildren:()=>import ("./authentication/authentication.module").then((m)=>m.AuthenticationModule)},
  {path:'student',loadChildren:()=>import ("./student/student.module").then((m)=>m.StudentModule)},
  {path:'admin',loadChildren:()=>import ("./librarian/librarian.module").then((m)=>m.LibrarianModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
