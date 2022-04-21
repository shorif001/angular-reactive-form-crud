import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService:StudentsService, private router:ActivatedRoute) { }

  // https://www.youtube.com/watch?v=z8lYOHFEIn4&list=PLQcBFrxTul9IQFF7fJz7jgdRYJz1OCbll&index=7


  message:boolean = false;
  editStudent = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
  })

  ngOnInit(): void {
    //  console.log(this.router.snapshot.params.id);
     this.studentService.getStudentById(this.router.snapshot.params.id).subscribe((result:any)=>{
      //  console.log(result);
       this.editStudent = new FormGroup({
        name:new FormControl(result['name']),
        email:new FormControl(result['email']),
      })
     })
    }
    
  
  updateData(){
    // console.log(this.editStudent.value);
    this.studentService.updateStudentData(this.router.snapshot.params.id, this.editStudent.value).subscribe((result)=>{
      // console.log(result);
      this.message=true;
      this.editStudent.reset();
    })
  }

  removeMessage(){
    this.message = false;
  }



}
