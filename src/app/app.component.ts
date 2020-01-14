import { FormGroup,FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'button-toogle';
  buttonT: FormGroup
  constructor(public fb: FormBuilder) {
     this.buttonT = fb.group({
       botonera: []
     });
     this.buttonT.controls['botonera'].valueChanges.subscribe((data: any) => {
       console.log(data);
     })
  }

}
