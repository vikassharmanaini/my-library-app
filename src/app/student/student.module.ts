import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { StudentComponent } from './student.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MybooksComponent } from './mybooks/mybooks.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ProfileComponent } from './profile/profile.component';
import { ComplainComponent } from './complain/complain.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TopStudentComponent } from './top-student/top-student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentComponent,
    MybooksComponent,
    AddBookComponent,
    ProfileComponent,
    ComplainComponent,
    BookmarksComponent,
    TopStudentComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class StudentModule { }
