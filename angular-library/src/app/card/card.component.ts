import { Component, OnInit } from '@angular/core';
import { Card } from "../card";
import { CARDS } from "../mock-cards";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card = {
    title: 'Java',
    details: 'book details...'
  };
  cards = CARDS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
