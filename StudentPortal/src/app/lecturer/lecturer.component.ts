import { MatDialog } from '@angular/material/dialog';
import { ListStudentsComponent } from './list-students/list-students.component';
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
  private listStudentComponent:ListStudentsComponent;
  @ViewChild(ListStudentsComponent, { static: false }) childC: ListStudentsComponent;

  constructor(private lecturerService:LecturerService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.listStudentComponent=new ListStudentsComponent(this.lecturerService);
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
            this.dialog.open(SuccessComponent);
            this.childC.update();
            subscribeDialog.unsubscribe();
          });

          dialogRef.afterClosed().subscribe(result=>{
            console.log("The form is closed !!!");
          });

    }
    
    clear(){
      this.showMessage="";
    }
    ngChanges(){
      this.showMessage="";
    }
}
