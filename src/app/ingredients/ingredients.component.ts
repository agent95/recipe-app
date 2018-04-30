import { Component, OnInit } from '@angular/core';
import { RECIPES, AVAILABLE_INGREDIENTS} from '../models';
import { RecipeService } from '../recipe.service';
import { MatAccordion, MatButton, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  displayedColumns = ['quantity', 'name', 'type'];
  dataSource = new MatTableDataSource(AVAILABLE_INGREDIENTS);

  private ingredientsData: any;
  constructor(
    private recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.ingredientsData = AVAILABLE_INGREDIENTS;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
