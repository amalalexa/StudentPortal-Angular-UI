import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { ListStudentsComponent } from './lecturer/list-students/list-students.component';
import { MatComponentsModule} from './mat-components/mat-components.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LecturerService } from './service/lecturer.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ListDegreeComponent } from './lecturer/list-degree/list-degree.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentFormComponent } from './lecturer/student-form/student-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    ListStudentsComponent,
    ListDegreeComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatComponentsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [LecturerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
