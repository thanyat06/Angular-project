
import { Component, OnInit } from '@angular/core';
import { StudentService, StudentRec } from '../../service/student';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: StudentRec[] = [];

  constructor(private studentRec: StudentService) {}

  ngOnInit() {
    this.students = this.studentRec.getStudent();
  }
}
