import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatCheckboxModule, MatListModule, MatInputModule, MatTableModule, MatFormFieldModule, MatExpansionModule, MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material/';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyRecipesComponent } from './my-recipes/my-recipes.component';
import { RecipeIdeasComponent } from './recipe-ideas/recipe-ideas.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipeService } from './recipe.service';

const appRoutes: Routes = [
  { path: '', component: MyRecipesComponent },
  { path: 'my-recipes', component: MyRecipesComponent },
  { path: 'recipe-ideas', component: RecipeIdeasComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'ingredients', component: IngredientsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MyRecipesComponent,
    RecipeIdeasComponent,
    ShoppingListComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
