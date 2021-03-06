import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:any;

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe(data => this.students = data);
  }

}
