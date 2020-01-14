 // Material modules imports go here
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
@NgModule({
imports: [ MatButtonModule, MatCheckboxModule, MatButtonToggleModule ],
exports: [MatButtonModule, MatCheckboxModule, MatButtonToggleModule],
})
export class MaterialModule { }
