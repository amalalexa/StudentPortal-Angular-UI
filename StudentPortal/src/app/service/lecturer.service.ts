import { InputStudentDetails } from './../view/input-student-details';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LecturerService {

  constructor(private http:HttpClient) { }

  getListOfStudents(lecturerId:String,degreeId:String){

    let headers = new HttpHeaders().set("lecturerId",lecturerId as string).set("degreeId",degreeId as string);

    return this.http.get(environment.apiUrl+"/lecturer/students", {headers:headers});

  }

  getListOfDegrees(lecturerId:String){

    let headers = new HttpHeaders().set("lecturerId",lecturerId as string);

    return this.http.get(environment.apiUrl+"/lecturer/degrees", {headers:headers});

  }

  getListOfCourses(degreeId:String){

    let headers = new HttpHeaders().set("degreeId",degreeId as string);

    return this.http.get(environment.apiUrl+"/lecturer/degree/courses", {headers:headers, responseType: 'text' });

  }

  saveStudentDetails(student:InputStudentDetails){
    return this.http.post(environment.apiUrl+"/lecturer/savestudent",student,{ responseType: 'text' });
  }

  removeStudent(studentId:String){

    let headers = new HttpHeaders().set("studentId",studentId as string);

    return this.http.delete(environment.apiUrl+"/lecturer/removestudent",{headers:headers, responseType: 'text' });
  }

}
