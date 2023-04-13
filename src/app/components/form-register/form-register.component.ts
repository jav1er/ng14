import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  @Output() llenaNodo = new EventEmitter();
  public d = new Date();
  //public valor : any = ''

  public p = Math.PI
  valor:string = 'valor'
  data = 'llego la data'
  protected list: Array<Number> = [1, 2, 3];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  goNew() {
    this._router.navigate(['/news','param1', 'param2']);
  }

  emitir() {
    this.llenaNodo.emit('se lleno el nodo');
  }
}
