import { Component, OnInit} from '@angular/core';
import { Student} from '../student';
import {StudentService} from '../student.service';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit{
 students !:Observable<Student[]>;

 constructor(private router: Router,private studentService: StudentService) { }
 ngOnInit(){
   this.showAllStudents();
 }

 showAllStudents(){
  this.students=this.studentService.getStudentList();
 }

 
 studentDetails(rollNumber:number){
  this.router.navigate(['details',rollNumber]);
}



}
