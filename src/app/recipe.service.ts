import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  constructor() { }

  isSubSet(availableIngredients, recipeIngredients) {
    return recipeIngredients.every(item => this.getNames(availableIngredients).indexOf(item.name) > -1);
  }

  toBuy(recipes, availableIngredients ) {
    const allRequiredIngredients = this.getIngredients(recipes);
    const itemsToBuy = allRequiredIngredients.filter(item => {
      return this.getNames(availableIngredients).indexOf(item.name) === -1;
    });
    return itemsToBuy;
  }

  getIngredients(recipes) {
    const allRequiredIngredients = [];
    recipes.forEach(item => {
      item.ingredients.forEach(ingredient => {
        allRequiredIngredients.push(ingredient);
      });
    });
    return allRequiredIngredients;
  }

  getNames(ingredients) {
    const names = [];
    ingredients.forEach(item => {
      names.push(item.name);
    });
    return names;
  }

}
