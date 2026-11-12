
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {

  studentName = '';
  studentAge: number | null = null;
  department = '';
  email = '';

  constructor(private router: Router) {}

  registerStudent() {
    const student = {
      id: Date.now(),
      name: this.studentName,
      age: this.studentAge,
      department: this.department,
      email: this.email
    };

    const students = JSON.parse(
      localStorage.getItem('students') || '[]'
    );

    students.push(student);

    localStorage.setItem(
      'students',
      JSON.stringify(students)
    );

    alert('Student registered successfully!');

    this.router.navigate(['/student-list']);
  }
}
