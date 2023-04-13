import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  //valor =""
  public userForm: FormGroup = this.formBuilder.group({
    name: [
      'nombre',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
        Validators.maxLength(6),
        Validators.minLength(3),
      ],
    ],
    lastname: ['apellido', [Validators.required, Validators.pattern(/1$/)]],
    bio: [
      'descripcion',
      [Validators.required, Validators.minLength(11), Validators.maxLength(11)],
    ],
    gender: ['', []],
    dni: ['v', []],
    pet: [, []],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    console.log(this.userForm.get('name')?.errors);
    console.log(this.userForm.get('bio')?.errors);

    //  this.userForm.get('name')?.valueChanges.subscribe((newValues) => {
    //  console.log(newValues);
    //  });

    // this.userForm.valueChanges.subscribe((newValues) => {
    //   console.log(newValues);
    // });
  }

  validate() {
    if (this.userForm.valid) {
      console.log('formulario valido');
      console.log(this.userForm.value);
    }

    // if (this.userForm.invalid) {
    //   console.log('invalido');

    //   console.log(this.userForm.status);
    // }
  }
}

//
//console.log('en el ngAfterViewChecked')
// this.userForm.get('name')?.valueChanges.subscribe((newValues) => {
//   console.log(newValues);
// });
