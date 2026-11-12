
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService, StudentRec } from '../../service/student';

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

  constructor(
    private studentRec: StudentService,
    private router: Router
  ) {}

  registerStudent() {
    const student: StudentRec = {
      id: Date.now(),
      name: this.studentName,
      age: this.studentAge ?? 0,
      department: this.department,
      email: this.email
    };

    this.studentRec.addStudent(student);

    alert('Student registered successfully!');

    this.router.navigate(['/student-list']);
  }
}
