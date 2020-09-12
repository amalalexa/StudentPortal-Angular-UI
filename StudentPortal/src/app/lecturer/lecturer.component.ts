import { ListStudentsComponent } from './list-students/list-students.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  private listStudentComponent:ListStudentsComponent
  constructor() { 
  }

  ngOnInit(): void {
    this.listStudentComponent=new ListStudentsComponent();
  }

  lecturerId:String = "L-1";
  
  callFunction()
  {
    this.listStudentComponent.listStudent();
  }
}
