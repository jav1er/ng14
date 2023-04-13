import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css'],
})
export class DebtsComponent {
  public valor = 'murio';
  valorBase = 'wdwnododwdwdwdmaduro,murio'
  public p = Math.PI;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  //@ViewChild('myclass', { static: true }) myClass: ElementRef;

  ngAfterViewInit() {
    const myClassElement = this.el.nativeElement.querySelector('.my-class');
    this.renderer.setStyle(myClassElement, 'display', 'none');
    console.log(myClassElement.textContent);
  }
}
