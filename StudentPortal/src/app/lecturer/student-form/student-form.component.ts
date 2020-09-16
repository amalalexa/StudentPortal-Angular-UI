import { InputStudentDetails } from './../../view/input-student-details';
import { LecturerService } from './../../service/lecturer.service';
import { NameValidators } from './name.validators';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student:InputStudentDetails;

  @Output() change = new EventEmitter<string>();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private lecturerService:LecturerService) {
   }

  ngOnInit(): void {

  }

  form = new FormGroup({
    'forename':new FormControl('',[
      Validators.required,
      NameValidators.forenameValidation]),
    'surname':new FormControl('',[
      Validators.required,
      NameValidators.surnameValidation]),
    'emailId':new FormControl('',[Validators.required,Validators.pattern("^[A-Za-z0-9+_.-]+@(.+)$")]),
    'dateOfBirth':new FormControl('',Validators.required),
    'degreeId':new FormControl('',Validators.required)
  });

  get forename(){
    return this.form.get('forename');
  }
  get surname(){
    return this.form.get('surname');
  }get email(){
    return this.form.get('emailId');
  }get dateOfBirth(){
    return this.form.get('dateOfBirth');
  }get degreeId(){
    return this.form.get('degreeId');
  }

  saveStudentDetails(form:FormGroup){
    this.student=form.value;
    this.student.dateOfBirth=JSON.stringify(this.form.get('dateOfBirth').value).substr(1,10);
    this.lecturerService.saveStudentDetails(this.student).subscribe(
      response=>{
        this.change.emit(response.valueOf());
      },
      error=>{
        console.log(error);
      }
    )
  }
}
