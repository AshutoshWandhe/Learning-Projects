import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/Employee';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  employee = new Employee(1, "Kiran", ["Employee", "Analyst"], "https://img95.699pic.com/element/40176/8390.png_300.png" );

  constructor() { }

  ngOnInit(): void {
  }

}
