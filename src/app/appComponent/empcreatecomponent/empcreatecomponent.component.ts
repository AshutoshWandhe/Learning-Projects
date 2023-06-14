import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/shared/Employee';

@Component({
  selector: 'app-empcreatecomponent',
  templateUrl: './empcreatecomponent.component.html',
  styleUrls: ['./empcreatecomponent.component.css']
})
export class EmpcreatecomponentComponent implements OnInit {

  @Output() empAddedEvent=new EventEmitter<Employee>();
  id: number;
  name: string;
  designation: string;
  imagePath: string;
  address: string;
  mobNo: number;
  location: string;

  constructor() {}

  ngOnInit(): void {
  }
  onAddNewEmployee(empForm:NgForm){
    let emp = new Employee(empForm.value.id, empForm.value.name, [empForm.value.designation], empForm.value.imagePath, empForm.value.address, empForm.value.mobNo,empForm.value.location);
    this.empAddedEvent.emit(emp);
  }

}
