import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: 'list-employee.component.html',
  styleUrls: ['list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: any;
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  responsive=false;

  constructor(private employeeService: EmployeeService,
    private router:Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {

    this.employeeService.getEmployeesList().subscribe(res=>this.employees=res);
    console.log(this.employees);
  }

 
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.reloadData();
    })
  }

  AddEmployee() {
    this.router.navigate(['/createEmployee']);
  }

  updateEmployee(id: number) {
    this.router.navigate(['/updateEmployee/',id]);
  }

  onTableDataChange(event:any){
    this.page = event;
    this.reloadData();
  }  

  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.reloadData();
  }  

}
