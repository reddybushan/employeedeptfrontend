import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: ListEmployeeComponent} ,
  { path: 'employees', component: ListEmployeeComponent} ,
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent} ,
  {path: 'createEmployee', component: CreateEmployeeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
