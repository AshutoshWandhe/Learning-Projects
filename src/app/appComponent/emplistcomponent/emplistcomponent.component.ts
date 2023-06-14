import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/shared/Employee';

@Component({
  selector: 'app-emplistcomponent',
  templateUrl: './emplistcomponent.component.html',
  styleUrls: ['./emplistcomponent.component.css']
})
export class EmplistcomponentComponent implements OnInit {

  @Input() emplist:Employee[];
   

  constructor() { }

  ngOnInit(): void {
  }

}
