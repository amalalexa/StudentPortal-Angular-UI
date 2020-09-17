import { OutStudentList } from './../../view/OutputStudentList';
import { LecturerService } from './../../service/lecturer.service';
import { Component, OnInit, Input } from '@angular/core';
import { OutputDegreeLists } from 'src/app/view/OutputDegreeLists';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from '../common/success/success.component';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  @Input("lecturerId") lecturerId :  String;
  studentsList$:OutStudentList;
  degreeList$:OutputDegreeLists;
  displayedColumns: string[] = ['Student Name', 'Degree Name', 'Remove'];
  temp$:any;
  constructor(private lecturerService:LecturerService,private dialog:MatDialog) {
   }

  ngOnInit(): void {

    this.lecturerService.getListOfDegrees(this.lecturerId).subscribe(response =>{
      this.degreeList$=JSON.parse(JSON.stringify(response));
    })
  }

  update(){
  }

  loadStudentList(degreeId){
    this.lecturerService.getListOfStudents(this.lecturerId,degreeId)
                        .subscribe(response =>{
                          this.studentsList$ = JSON.parse(JSON.stringify(response));
                        });
  }
  
  removeStudent(studentId){
    console.log(studentId);
    this.lecturerService.removeStudent(studentId).subscribe(response => {
      this.dialog.open(SuccessComponent,{
        data: {
          message: "Student Deleted"
        }
      });
    });
  }

  
 
}


  

