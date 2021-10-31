import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/addEmployee`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateEmployee/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteEmployee/${id}`, { responseType: 'text' });
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEmployee/${id}`, { responseType: 'json' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllEmployees`);
  }

}
