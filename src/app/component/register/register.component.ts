import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;



  constructor(private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('[a-zA-Z].*'),
        ],
      ],
      lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
          Validators.maxLength(10),
          Validators.minLength(10),
        ],
      ],
      devices: ['', [Validators.requiredTrue]],
      solutions: ['', [Validators.required]],
      comments: [''],
    });
  }
  ngOnInit(): void {}

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }
  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get PhoneNumber(): FormControl {
    return this.registerForm.get('phonenumber') as FormControl;
  }
  get Devices(): FormControl {
    return this.registerForm.get('devices') as FormControl;
  }
  get Solutions(): FormControl {
    return this.registerForm.get('solutions') as FormControl;
  }
  get Comments(): FormControl {
    return this.registerForm.get('comments') as FormControl;
  }

  onFormSubmit() {
    this.submitted = true;
    let data:any=this.registerForm.value;
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.router.navigate(['/succeed'], {queryParams:{data:JSON.stringify(data)}});
     }
     else{
      console.log("form is not valid");
     // this.registerForm.markAsDirty;
     this.validateAllFormFields(this.registerForm);
      
    }
    }

    private validateAllFormFields(FormGroup:FormGroup){
      Object.keys(FormGroup.controls).forEach(field=>{
       const control = FormGroup.get(field);
       if(control instanceof FormControl){
         control.markAsDirty({onlySelf:true});}})}
}
