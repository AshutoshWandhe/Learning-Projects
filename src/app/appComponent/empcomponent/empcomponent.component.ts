import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/shared/Employee';

@Component({
  selector: 'app-empcomponent',
  templateUrl: './empcomponent.component.html',
  styleUrls: ['./empcomponent.component.css']
})
export class EmpcomponentComponent implements OnInit {

  storedEmp:Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  onNewEmpAdded(newemployee:Employee){
    //console.log(newemployee);
    this.storedEmp.push(newemployee);
    console.log(this.storedEmp);

  }

}
