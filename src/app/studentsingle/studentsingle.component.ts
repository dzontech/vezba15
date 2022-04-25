import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentsingle',
  templateUrl: './studentsingle.component.html',
  styleUrls: ['./studentsingle.component.css']
})
export class StudentsingleComponent implements OnInit {

  student!:Student;
  

  constructor(private service: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe(data=> {
      this.route.params.subscribe(value => {
        this.student = data[value['id']-1]
        
      })
    })
      
   

   
    
  }

}
