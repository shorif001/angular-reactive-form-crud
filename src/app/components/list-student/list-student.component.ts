import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  constructor(private studentService:StudentsService) { }

  allstudents:any = [];

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe((allData)=>{
      console.log(allData);
      this.allstudents = allData;
    })
  }

}