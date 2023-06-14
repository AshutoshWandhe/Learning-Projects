import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { SuccessComponent } from './component/success/success.component';


const routes:Routes=[
  {path:'', component: RegisterComponent},
  {path:'succeed', component: SuccessComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[RegisterComponent, SuccessComponent]