import { Component, Input, OnInit } from '@angular/core';
import { Details } from 'src/shared/information';

@Component({
  selector: 'app-registercomponent',
  templateUrl: './registercomponent.component.html',
  styleUrls: ['./registercomponent.component.css']
})
export class RegistercomponentComponent implements OnInit {

  constructor() { }

  @Input() details:Details[];

  ngOnInit(): void {
  }

}
