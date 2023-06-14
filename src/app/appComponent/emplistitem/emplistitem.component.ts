import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/shared/Employee';

@Component({
  selector: 'app-emplistitem',
  templateUrl: './emplistitem.component.html',
  styleUrls: ['./emplistitem.component.css']
})
export class EmplistitemComponent implements OnInit {

  @Input() empcomponent:Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
