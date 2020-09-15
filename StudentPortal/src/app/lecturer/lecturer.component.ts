import { MatDialog } from '@angular/material/dialog';
import { ListStudentsComponent } from './list-students/list-students.component';
import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../service/lecturer.service';
import { StudentFormComponent } from './student-form/student-form.component';


@Component({
  selector: 'lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  private listStudentComponent:ListStudentsComponent
  constructor(private lecturerService:LecturerService, private dialog:MatDialog) { 
  }

  ngOnInit(): void {
    this.listStudentComponent=new ListStudentsComponent(this.lecturerService);
  }

  lecturerId:String = "L-1";

  show:boolean = false;
  
  openStudentForm(){

    const dialogRef = this.dialog.open(StudentFormComponent);

    dialogRef.afterClosed().subscribe(result=>{
      console.log("The form is closed !!!");
    });
    

  }
  
  
}
