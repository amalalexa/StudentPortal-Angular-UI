import { OutStudentList } from './../../view/OutputStudentList';
import { LecturerService } from './../../service/lecturer.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @Input("lecturerId") lecturerId :  String;
  studentsList$:OutStudentList;
  displayedColumns: string[] = ['Student Name', 'Degree Name'];
  temp$:any;
  constructor(private lecturerService:LecturerService) {
   }

  ngOnInit(): void {
    this.lecturerService.getListOfStudents(this.lecturerId).subscribe(response =>{
      this.studentsList$=JSON.parse(JSON.stringify(response));
    },
    error => {
      console.log(error);
    });
  }

  update(){
    this.lecturerService.getListOfStudents(this.lecturerId).subscribe(response =>{
      this.studentsList$=JSON.parse(JSON.stringify(response));
    },
    error => {
      console.log(error);
    });
  }
  

  
 
}


  

