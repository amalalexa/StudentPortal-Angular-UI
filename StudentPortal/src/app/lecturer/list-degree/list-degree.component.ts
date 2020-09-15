import { OutputCourseList } from './../../view/OutputCourseList';
import { OutputDegreeLists } from './../../view/OutputDegreeLists';
import { LecturerService } from './../../service/lecturer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-degree',
  templateUrl: './list-degree.component.html',
  styleUrls: ['./list-degree.component.css']
})
export class ListDegreeComponent implements OnInit {

  @Input("lecturerId") lecturerId:String;

  temp:any;
  degreeLists$:OutputDegreeLists;
  courseList$:OutputCourseList;
  displayedColumns: string[] = ['Degree Name', 'Degree Duration(Years)','Courses'];
  displayedInnerColumns: string[] = ['Course Name','Course Duration(Months)'];
  constructor(private lecturerService:LecturerService) { }

  ngOnInit(): void {

    this.lecturerService.getListOfDegrees(this.lecturerId)
                        .subscribe(response=>{

                          this.temp=JSON.stringify(response);
                          this.degreeLists$=JSON.parse(this.temp);

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
                          console.log(this.courseList$);
                        },
                        error=>{
                          console.log(error);
                        });
  }

  



}
