import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentService:StudentsService) { }


  message:boolean = false;
  addStudent = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
  })

  saveData(){
    // console.log(this.addStudent.value);
    this.studentService.saveStudentData(this.addStudent.value).subscribe((result)=>{
      // console.log(result);
      this.message = true;
      this.addStudent.reset({})
    })
  }

  removeMessage(){
    this.message = false;
  }

 


  ngOnInit(): void {
  }

}
