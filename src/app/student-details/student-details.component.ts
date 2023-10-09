import { Component,OnInit } from '@angular/core';
import { Student} from '../student';
import {StudentService} from '../student.service';
import { Observable} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  rollNumber !: number;
  student !: Student;

  constructor(private route: ActivatedRoute, private router: Router,private studentService: StudentService) { }
  ngOnInit(){
    this.student = new Student();
    this.rollNumber = this.route.snapshot.params['rollNumber'];
    this.studentService.getStudentByRoll(this.rollNumber).subscribe(data => {
              this.student = data;
      });

  }
 goBackStudentList(){
  this.router.navigate(['AllStudents']);

 }


}
