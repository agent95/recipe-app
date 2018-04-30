import { Component, OnInit } from '@angular/core';
import { RECIPES, AVAILABLE_INGREDIENTS} from '../models';
import { RecipeService } from '../recipe.service';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-recipe-ideas',
  templateUrl: './recipe-ideas.component.html',
  styleUrls: ['./recipe-ideas.component.scss']
})
export class RecipeIdeasComponent implements OnInit {

  private recipeData: any;
  canTryRecipes: any;
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.recipeData = RECIPES;
    this.canTryRecipes = this.recipeData.filter(item => this.canBeTried(item));
  }

  canBeTried(item) {
    return this.recipeService.isSubSet(AVAILABLE_INGREDIENTS, item.ingredients);
  }

}
