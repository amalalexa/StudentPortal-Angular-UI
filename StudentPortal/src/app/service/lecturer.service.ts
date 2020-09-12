import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LecturerIdView } from '../view/LecturerIdView';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http:HttpClient) { }

  getListOfStudents(lecturerId:LecturerIdView){

    let headers = new HttpHeaders().set("Content-Type",'application/json').set("lecturerId",lecturerId.lecturerId as string)

    return this.http.get(environment.apiUrl+"/lecturer/students", {headers:headers})
                    .subscribe(response => {
                      console.log(response);

                    },
                    error =>{
                      console.log(error);
                    });

  }


}
