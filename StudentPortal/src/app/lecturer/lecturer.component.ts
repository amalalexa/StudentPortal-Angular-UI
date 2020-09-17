import { ListDegreeComponent } from './list-degree/list-degree.component';
import { MatDialog } from '@angular/material/dialog';
import { Component,  OnInit, ViewChild } from '@angular/core';
import { LecturerService } from '../service/lecturer.service';
import { StudentFormComponent } from './student-form/student-form.component';
import { SuccessComponent } from './common/success/success.component';


@Component({
  selector: 'lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  lecturerId:String = "L-1";
  degreeList$:String[]=[];
  showMessage:String="";
  @ViewChild(ListDegreeComponent, { static: false }) childC: ListDegreeComponent;

  constructor(private lecturerService:LecturerService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.lecturerService.getListOfDegrees(this.lecturerId)
                        .subscribe(response=>{
                                    this.degreeList$=JSON.parse(JSON.stringify(response));
                        });
  }

  openStudentForm(){

          const dialogRef = this.dialog.open(StudentFormComponent,{
            data: {
              degreeList: this.degreeList$
            }
          });
          
          const subscribeDialog= dialogRef.componentInstance.change.subscribe((data)=>{
            this.dialog.open(SuccessComponent,{
              data: {
                message: "Student Saved"
              }
            });
            subscribeDialog.unsubscribe();
          });

          dialogRef.afterClosed().subscribe(result=>{
            console.log("The form is closed !!!");
          });

    }

    update(){
        this.childC.ngOnInit();
    }
}
