import { Component } from '@angular/core';

@Component({
  selector: 'card-principal',
  templateUrl: './card-principal.component.html',
  styleUrls: ['./card-principal.component.css']
})
export class CardPrincipalComponent {
  cards: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}
