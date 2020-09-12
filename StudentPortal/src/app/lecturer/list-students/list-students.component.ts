import { LecturerService } from './../../service/lecturer.service';
import { Component, OnInit, Input } from '@angular/core';
import { LecturerIdView } from 'src/app/view/LecturerIdView';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  private viewObject:LecturerIdView;
  constructor(private lecturerService?:LecturerService) {
    this.viewObject=new LecturerIdView();
   }

  ngOnInit(): void {
  }

  @Input("lecturerId") lecturerId :  String;

  listStudent(){
    this.viewObject.lecturerId=this.lecturerId;
    this.lecturerService.getListOfStudents(this.viewObject);
  }
}


  

