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

  dtOptions:DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions ={
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5,10, 15, 50],
      processing: true
    }
    this.studentService.getAllStudent().subscribe((allData)=>{
      console.log(allData);
      this.allstudents = allData;
    })
  }


  editStudent(student_id:number){

  }

  deleteStudent(student_id:number){
    // console.log(student_id);
    this.studentService.deleteStudent1(student_id).subscribe((result)=>{
      // console.log(result);
      this.ngOnInit();
    })
  }

}
