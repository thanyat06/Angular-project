
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {

  students: any[] = [];

  ngOnInit() {
    this.students = JSON.parse(
      localStorage.getItem('students') || '[]'
    );
  }
}
