import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../models/recipes.model';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent implements OnInit {

  recipeData;

  constructor() { }

  ngOnInit() {
    this.recipeData = RECIPES;
  }

}
