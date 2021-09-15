import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomCard } from 'src/app/models/custom-card.interface';
import { selectCards } from 'src/app/redux/selectors/custom-cards.selectors';


@Component({
  selector: 'app-custom-cards-list',
  templateUrl: './custom-cards-list.component.html',
  styleUrls: ['./custom-cards-list.component.scss'],
})
export class CustomCardsListComponent implements OnInit {
  cards$: Observable<Array<CustomCard>> = this.store.pipe(
    select(selectCards),
  );

  cards: Array<CustomCard> = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.cards$.subscribe((val: any) => {
      this.cards = val;
    });
  }

}
