import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-form-celsius',
  templateUrl: './form-celsius.component.html',
  styleUrls: ['./form-celsius.component.css'],
})
export class FormCelsiusComponent implements OnInit {
  public celsius = 0;
  public fahrenheit = 0;

  public celsiusForm: FormGroup = this.formBuilder.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z]+$/),
        Validators.maxLength(6),
        Validators.minLength(3),
      ],
    ],
    lastname: ['', [Validators.required, Validators.pattern(/1$/)]],
    bio: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(6)],
    ],
    gender: ['', []],
    dni: ['v', []],
    pet: [false, []],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  validate() {
    if (this.celsiusForm.valid) {
      console.log('formulario valido');
      console.log(this.celsiusForm.value);
    }

    // if (this.celsiusForm.invalid) {
    //   console.log('invalido');

    //   console.log(this.celsiusForm.status);
    // }
  }

  changeF(e: any) {
    console.log(e.target.value);
    this.calCelsius(e.target.value);
    console.log('cambio fah');
  }

  changeC(e: any) {
    console.log(e.target.value);
    this.calFahrenheit(e.target.value);
    console.log('cambio c');
  }

  calCelsius(f: any) {
    this.celsius = ((f - 32) * 5) / 9;
  }

  calFahrenheit(c: any) {
    this.fahrenheit = (c * 9) / 5 + 32;
  }



  // (0 °C × 9/5) + 32 = 32 °F

}
