import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../Department';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee(0,"","",0,"","",0,new Department(1,""));
  submitted!: boolean;

  constructor(private employeeService: EmployeeService,private router : Router) { }

  ngOnInit(): void {
    this.newEmployee();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee(0,"","",0,"","",0, new Department(1,""));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  save() {
    this.employeeService
    .createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee(0,"","",0,"","",0,new Department(1,""));
      this.gotoList();
    }, 
    error => console.log(error));
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
