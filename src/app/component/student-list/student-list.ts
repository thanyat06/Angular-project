
import { Component, OnInit } from '@angular/core';
import { StudentService, StudentRec } from '../../service/student';
import { StudentCard } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCard],
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
