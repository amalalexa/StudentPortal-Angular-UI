import { OutputCourseList } from './../../view/OutputCourseList';
import { OutputDegreeLists } from './../../view/OutputDegreeLists';
import { LecturerService } from './../../service/lecturer.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentFormComponent } from '../student-form/student-form.component';
import { SuccessComponent } from '../common/success/success.component';
import { ListStudentsComponent } from '../list-students/list-students.component';
import { LecturerComponent } from '../lecturer.component';

@Component({
  selector: 'list-degree',
  templateUrl: './list-degree.component.html',
  styleUrls: ['./list-degree.component.css']
})
export class ListDegreeComponent implements OnInit {

  @Input("lecturerId") lecturerId:String;

  degreeLists$:OutputDegreeLists;
  degree:OutputDegreeLists = new OutputDegreeLists();
  courseList$:OutputCourseList;
  displayedColumns: string[] = ['Degree Name', 'Degree Duration(Years)', 'Number of Students','Courses', 'Add Student'];
  displayedInnerColumns: string[] = ['Course Name','Course Duration(Months)'];
  constructor(private lecturerService:LecturerService, private dialog:MatDialog, private lecturerComponent:LecturerComponent) { }
  

  ngOnInit(): void {

    this.lecturerService.getListOfDegrees(this.lecturerId)
                        .subscribe(response=>{

                          this.degreeLists$=JSON.parse(JSON.stringify(response));

                        },
                        error=>{
                          console.log(error);
                        });

  }

  getCourseList(degreeId:String){
    console.log(degreeId);
    this.lecturerService.getListOfCourses(degreeId)
                        .subscribe(response=>{
                          this.courseList$=JSON.parse(JSON.stringify(response));
                        },
                        error=>{
                          console.log(error);
                        });
    }

    openStudentForm(degreeId,degreeName){
      this.degree.degreeName = degreeName;
      this.degree.degreeId = degreeId;
      const dialogRef = this.dialog.open(StudentFormComponent,{
        data: {
          degreeList : [JSON.parse(JSON.stringify(this.degree))]
        }
      });
      
      const subscribeDialog= dialogRef.componentInstance.change.subscribe((data)=>{
        this.dialog.open(SuccessComponent,{
          data: {
            message: "Student Saved"
          }
        });
        this.lecturerComponent.update();
        subscribeDialog.unsubscribe();
      });

      dialogRef.afterClosed().subscribe(result=>{
        console.log("The form is closed !!!");
      });
      
    }
  



}
