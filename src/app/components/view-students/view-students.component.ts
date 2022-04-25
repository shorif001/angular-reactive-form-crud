import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  constructor(private studentService:StudentsService, private activatedRoute:ActivatedRoute) { }

  studentData:any = [];
  // userId:any = [];
  ngOnInit(): void {
   
    this.studentService.viewStudent(this.activatedRoute.snapshot.params.id).subscribe((result)=>{
      console.log(result);
      this.studentData = result;
    })
  }

}
