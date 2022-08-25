import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrarianRoutingModule } from './librarian-routing.module';
import { LibrarianComponent } from './librarian.component';
import { BooksComponent } from './books/books.component';
import { NoticeComponent } from './notice/notice.component';
import { TopStudentComponent } from './top-student/top-student.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatExpansionModule } from "@angular/material/expansion";
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    LibrarianComponent,
    BooksComponent,
    NoticeComponent,
    TopStudentComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    LibrarianRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
  ]
})
export class LibrarianModule { }
