import { Component, OnInit } from '@angular/core';
import { RECIPES, AVAILABLE_INGREDIENTS} from '../models';
import { RecipeService } from '../recipe.service';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {


  recipesToBuy: any;
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.needToBuy();
  }

  needToBuy() {
    this.recipesToBuy = this.recipeService.toBuy(RECIPES, AVAILABLE_INGREDIENTS);
  }

}
