import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    FiltersComponent,
    LoginComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ SearchComponent ]
})
export class CoreModule { }
