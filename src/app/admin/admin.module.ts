import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { CustomCardsListComponent } from './custom-cards-list/custom-cards-list.component';
import { IndexComponent } from './pages/index.component';


@NgModule({
  declarations: [
    CreateCardComponent,
    CustomCardsListComponent,
    IndexComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule { }
