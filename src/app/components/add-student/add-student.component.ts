import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    name:new FormControl('', [Validators.required]),
    email:new FormControl(''),
  })

  get name(){
    return this.addStudent.get('name');
  }

  // https://www.youtube.com/watch?v=z8lYOHFEIn4&list=PLQcBFrxTul9IQFF7fJz7jgdRYJz1OCbll&index=7
  
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
