import { OutStudentList } from './../../view/OutputStudentList';
import { LecturerService } from './../../service/lecturer.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  studentsList$:OutStudentList;
  displayedColumns: string[] = ['Student Name', 'Degree Name'];
  temp$:any;
  constructor(private lecturerService:LecturerService) {
   }

  ngOnInit(): void {
    this.lecturerService.getListOfStudents(this.lecturerId).subscribe(response =>{
      this.temp$=JSON.stringify(response);
      this.studentsList$=JSON.parse(this.temp$);
    },
    error => {
      console.log(error);
    });
  }

  @Input("lecturerId") lecturerId :  String;
 
}


  

