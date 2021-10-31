import { Department } from "./Department";

export class Employee {

   employeeId: number;
   firstName: string;
   lastName: string;
   phoneNumber: string;
    managerId: number;
   salary: number;
   department: Department;
   
     email: string;

    constructor(employeeId: number, firstName: string, lastName:string, salary: number, email:string,phoneNo :string, managerId:number,department:Department,
      ) {
      this.employeeId = employeeId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
      this.email = email;
      this.phoneNumber = phoneNo;
      this.managerId = managerId;
      this.department = department;
    }
   
  }