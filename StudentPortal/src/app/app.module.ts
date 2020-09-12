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


@NgModule({
  declarations: [
    AppComponent,
    LecturerComponent,
    ListStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatComponentsModule,
    HttpClientModule
  ],
  providers: [LecturerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
