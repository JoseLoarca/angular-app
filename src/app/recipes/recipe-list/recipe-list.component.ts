import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Issa recipe', 'this issa test recipe', 'https://i.imgur.com/ta6jeR0.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
