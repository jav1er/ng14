import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public x: any = 'ee';
  public nombre = '';

  @Input() name: String = '';

  ngOnInit(): void {
    console.log('cargo en el dom, ');

    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.nombre = params['id'];
    });
  }

  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log('en el costructor');
    this.x = 155;
    console.log(this.x);
  }

  redirection() {
    this._router.navigate(['/page', 'jarvis', 'rangel']);
  }
}
