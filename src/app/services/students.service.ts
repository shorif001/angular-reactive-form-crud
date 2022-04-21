import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  
  constructor(private http:HttpClient) { }
  
  url = 'http://localhost:3000/students';

  getAllStudent(){
    return this.http.get(this.url) //eta shudhu all student data newa ba dekhanor page er jonno
  }
  
  saveStudentData(data:any){
    // console.log(data);
    return this.http.post( this.url, data);
  }

}
