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

  deleteStudent1(i:number){
    return this.http.delete(`${this.url}/${i}`);
  }

  getStudentById(i:number){
    return this.http.get(`${this.url}/${i}`);
  }
  updateStudentData(i:number, data:any){
    return this.http.put(`${this.url}/${i}`, data);
  }

  viewStudent(id:any){
    return this.http.get(`${this.url}/${id}`);
  }

}
