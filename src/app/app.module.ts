import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskdataService } from './shared/taskdata.service';
import { HeaderComponent } from './header.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtasksComponent } from './tasks/addtasks.component';
import { routes } from './app.routing';
import { FilterPipe } from './shared/filter.pipe';

import { PaginatePipe } from './ng2paging/paginate.pipe';
import { PaginationService } from './ng2paging/pagination.service';
import { PaginationControlsComponent } from './ng2paging/pagination-controls.component';
import { PaginationControlsDirective } from './ng2paging/pagination-controls.directive';
import { PaginationInstance } from './ng2paging/pagination-instance';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    AddtasksComponent,
    FilterPipe,
    PaginatePipe,
    PaginationControlsComponent,
    PaginationControlsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [TaskdataService,PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
