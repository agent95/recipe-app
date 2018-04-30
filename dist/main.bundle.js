webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <mat-toolbar color=\"primary\" class=\"d-flex justify-content-between\">\n      <div>\n      <mat-icon>restaurant</mat-icon>\n        <small class=\"ml-2\"> RECIPE APP</small>\n        </div>\n        <div>\n        <mat-menu #menu=\"matMenu\">\n          <span mat-menu-item [routerLink]=\"['my-recipes']\">My Recipes</span>\n          <span mat-menu-item [routerLink]=\"['ingredients']\">My Ingredients</span>\n          <span mat-menu-item [routerLink]=\"['recipe-ideas']\">Recipe Ideas</span>\n          <span mat-menu-item [routerLink]=\"['shopping-list']\">Shopping List</span>\n        </mat-menu>\n        <mat-icon [matMenuTriggerFor]=\"menu\">menu</mat-icon>\n      </div>\n  </mat-toolbar>\n  <router-outlet></router-outlet>\n</div> \n<footer class=\"p-5\"></footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material___ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_recipes_my_recipes_component__ = __webpack_require__("../../../../../src/app/my-recipes/my-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__recipe_ideas_recipe_ideas_component__ = __webpack_require__("../../../../../src/app/recipe-ideas/recipe-ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ingredients_ingredients_component__ = __webpack_require__("../../../../../src/app/ingredients/ingredients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// tslint:disable-next-line:max-line-length








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__my_recipes_my_recipes_component__["a" /* MyRecipesComponent */] },
    { path: 'my-recipes', component: __WEBPACK_IMPORTED_MODULE_6__my_recipes_my_recipes_component__["a" /* MyRecipesComponent */] },
    { path: 'recipe-ideas', component: __WEBPACK_IMPORTED_MODULE_7__recipe_ideas_recipe_ideas_component__["a" /* RecipeIdeasComponent */] },
    { path: 'shopping-list', component: __WEBPACK_IMPORTED_MODULE_8__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */] },
    { path: 'ingredients', component: __WEBPACK_IMPORTED_MODULE_9__ingredients_ingredients_component__["a" /* IngredientsComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__my_recipes_my_recipes_component__["a" /* MyRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__recipe_ideas_recipe_ideas_component__["a" /* RecipeIdeasComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ingredients_ingredients_component__["a" /* IngredientsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["g" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["j" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["c" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["h" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material___["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__recipe_service__["a" /* RecipeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"col-sm\">\n    <p class=\"my-3\"><strong>Available Ingredients</strong></p>\n\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n\n    <mat-table #table [dataSource]=\"dataSource\">\n\n        <!-- Quantity Column -->\n        <ng-container matColumnDef=\"quantity\">\n          <mat-header-cell *matHeaderCellDef> Qty. </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.quantity}} </mat-cell>\n        </ng-container>\n    \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n        </ng-container>\n    \n        <!-- Type Column -->\n        <ng-container matColumnDef=\"type\">\n          <mat-header-cell *matHeaderCellDef> Type </mat-header-cell>\n          <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\n        </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ingredients/ingredients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IngredientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IngredientsComponent = /** @class */ (function () {
    function IngredientsComponent(recipeService) {
        this.recipeService = recipeService;
        this.displayedColumns = ['quantity', 'name', 'type'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTableDataSource */](__WEBPACK_IMPORTED_MODULE_1__models__["a" /* AVAILABLE_INGREDIENTS */]);
    }
    IngredientsComponent.prototype.ngOnInit = function () {
        this.ingredientsData = __WEBPACK_IMPORTED_MODULE_1__models__["a" /* AVAILABLE_INGREDIENTS */];
    };
    IngredientsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    IngredientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ingredients',
            template: __webpack_require__("../../../../../src/app/ingredients/ingredients.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ingredients/ingredients.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], IngredientsComponent);
    return IngredientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recipes_model__ = __webpack_require__("../../../../../src/app/models/recipes.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__recipes_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ingredients_model__ = __webpack_require__("../../../../../src/app/models/ingredients.model.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__ingredients_model__["a"]; });




/***/ }),

/***/ "../../../../../src/app/models/ingredients.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AVAILABLE_INGREDIENTS; });
var AVAILABLE_INGREDIENTS = [
    {
        'quantity': '1',
        'name': ' beef roast',
        'type': 'Meat'
    },
    {
        'quantity': '1 package',
        'name': 'brown gravy mix',
        'type': 'Baking'
    },
    {
        'quantity': '1 package',
        'name': 'dried Italian salad dressing mix',
        'type': 'Condiments'
    },
    {
        'quantity': '1 package',
        'name': 'dry ranch dressing mix',
        'type': 'Condiments'
    },
    {
        'quantity': '1/2 cup',
        'name': 'water',
        'type': 'Drinks'
    },
    {
        'quantity': '1 lb',
        'name': ' asparagus',
        'type': 'Produce'
    },
    {
        'quantity': '1 1/2 tbsp',
        'name': 'olive oil',
        'type': 'Condiments'
    },
    {
        'quantity': '1/2 tsp',
        'name': 'kosher salt',
        'type': 'Baking'
    },
    {
        'quantity': '2',
        'name': 'acorn squash',
        'type': 'Produce'
    },
    {
        'quantity': '1',
        'name': 'boiling water',
        'type': 'Drinks'
    },
    {
        'quantity': '2',
        'name': 'apples chopped into 1.4 inch pieces',
        'type': 'Produce'
    },
    {
        'quantity': '1/2 cup',
        'name': 'dried cranberries',
        'type': 'Produce'
    },
    {
        'quantity': '1 teaspoon',
        'name': 'cinnamon',
        'type': 'Baking'
    },
    {
        'quantity': '2 tablespoons',
        'name': 'melted butter',
        'type': 'Dairy'
    },
    {
        'quantity': '2-1/2 cups',
        'name': 'rolled oats, (not instant)',
        'type': 'Baking'
    },
    {
        'quantity': '1-1/4 cups',
        'name': 'all-purpose flour',
        'type': 'Baking'
    },
    {
        'quantity': '1 tbsp',
        'name': 'grated orange rind',
        'type': 'Produce'
    },
    {
        'quantity': '1/4 tsp',
        'name': 'salt',
        'type': 'Baking'
    },
    {
        'quantity': '1 cup',
        'name': 'cold butter, cubed',
        'type': 'Baking'
    },
    {
        'quantity': '3/4 cup',
        'name': 'packed brown sugar',
        'type': 'Baking'
    },
    {
        'quantity': '3 cups',
        'name': 'fresh blueberries',
        'type': 'Produce'
    },
    {
        'quantity': '1/2 cup',
        'name': 'granulated sugar',
        'type': 'Baking'
    },
    {
        'quantity': '1/3 cup',
        'name': 'orange juice',
        'type': 'Produce'
    },
    {
        'quantity': '4 tsp',
        'name': 'cornstarch',
        'type': 'Baking'
    }
];


/***/ }),

/***/ "../../../../../src/app/models/recipes.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RECIPES; });
// src https://github.com/raywenderlich/recipes/blob/master/Recipes.json
var RECIPES = [
    {
        'name': 'Crock Pot Roast',
        'ingredients': [
            {
                'quantity': '1',
                'name': ' beef roast',
                'type': 'Meat'
            },
            {
                'quantity': '1 package',
                'name': 'brown gravy mix',
                'type': 'Baking'
            },
            {
                'quantity': '1 package',
                'name': 'dried Italian salad dressing mix',
                'type': 'Condiments'
            },
            {
                'quantity': '1 package',
                'name': 'dry ranch dressing mix',
                'type': 'Condiments'
            },
            {
                'quantity': '1/2 cup',
                'name': 'water',
                'type': 'Drinks'
            }
        ],
        'steps': [
            'Place beef roast in crock pot.',
            'Mix the dried mixes together in a bowl and sprinkle over the roast.',
            'Pour the water around the roast.',
            'Cook on low for 7-9 hours.'
        ],
        'timers': [
            0,
            0,
            0,
            420
        ],
        'imageURL': 'crock_pot_roast.jpg',
        'originalURL': 'http://www.food.com/recipe/to-die-for-crock-pot-roast-27208'
    },
    {
        'name': 'Roasted Asparagus',
        'ingredients': [
            {
                'quantity': '1 lb',
                'name': ' asparagus',
                'type': 'Produce'
            },
            {
                'quantity': '1 1/2 tbsp',
                'name': 'olive oil',
                'type': 'Condiments'
            },
            {
                'quantity': '1/2 tsp',
                'name': 'kosher salt',
                'type': 'Baking'
            }
        ],
        'steps': [
            'Preheat oven to 425°F.',
            'Cut off the woody bottom part of the asparagus spears and discard.',
            // tslint:disable-next-line:max-line-length
            'With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears (this keeps the asparagus from being all.",string.", and if you eat asparagus you know what I mean by that).',
            'Place asparagus on foil-lined baking sheet and drizzle with olive oil.',
            'Sprinkle with salt.',
            'With your hands, roll the asparagus around until they are evenly coated with oil and salt.',
            'Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.',
            'They should be tender when pierced with the tip of a knife.',
            'The tips of the spears will get very brown but watch them to prevent burning.',
            'They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.'
        ],
        'timers': [
            0,
            0,
            0,
            0,
            0,
            0,
            10,
            0,
            0,
            0
        ],
        'imageURL': 'roasted_asparagus.jpg',
        'originalURL': 'http://www.food.com/recipe/roasted-asparagus-50847'
    },
    {
        'name': 'Curried Lentils and Rice',
        'ingredients': [
            {
                'quantity': '1 quart',
                'name': 'beef broth',
                'type': 'Misc'
            },
            {
                'quantity': '1 cup',
                'name': 'dried green lentils',
                'type': 'Misc'
            },
            {
                'quantity': '1/2 cup',
                'name': 'basmati rice',
                'type': 'Misc'
            },
            {
                'quantity': '1 tsp',
                'name': 'curry powder',
                'type': 'Condiments'
            },
            {
                'quantity': '1 tsp',
                'name': 'salt',
                'type': 'Condiments'
            }
        ],
        'steps': [
            'Bring broth to a low boil.',
            'Add curry powder and salt.',
            'Cook lentils for 20 minutes.',
            'Add rice and simmer for 20 minutes.',
            'Enjoy!'
        ],
        'timers': [
            0,
            0,
            20,
            20,
            0
        ],
        'imageURL': 'curried_lentils_and_rice.jpg'
    },
    {
        'name': 'Big Night Pizza',
        'ingredients': [
            {
                'quantity': '5 teaspoons',
                'name': 'yeast',
                'type': 'Baking'
            },
            {
                'quantity': '5 cups',
                'name': 'flour',
                'type': 'Baking'
            },
            {
                'quantity': '4 tablespoons',
                'name': 'vegetable oil',
                'type': 'Baking'
            },
            {
                'quantity': '2 tablespoons',
                'name': 'sugar',
                'type': 'Baking'
            },
            {
                'quantity': '2 teaspoons',
                'name': 'salt',
                'type': 'Baking'
            },
            {
                'quantity': '2 cups',
                'name': 'hot water',
                'type': 'Misc'
            },
            {
                'quantity': '1/4 cup',
                'name': 'pizza sauce',
                'type': 'Misc'
            },
            {
                'quantity': '3/4 cup',
                'name': 'mozzarella cheese',
                'type': 'Dairy'
            }
        ],
        'steps': [
            'Add hot water to yeast in a large bowl and let sit for 15 minutes.',
            'Mix in oil, sugar, salt, and flour and let sit for 1 hour.',
            'Knead the dough and spread onto a pan.',
            'Spread pizza sauce and sprinkle cheese.',
            'Add any optional toppings as you wish.',
            'Bake at 400 deg Fahrenheit for 15 minutes.',
            'Enjoy!'
        ],
        'timers': [
            15,
            60,
            0,
            0,
            0,
            15,
            0
        ],
        'imageURL': 'big_night_pizza.jpg'
    },
    {
        'name': 'Cranberry and Apple Stuffed Acorn Squash Recipe',
        'ingredients': [
            {
                'quantity': '2',
                'name': 'acorn squash',
                'type': 'Produce'
            },
            {
                'quantity': '1',
                'name': 'boiling water',
                'type': 'Drinks'
            },
            {
                'quantity': '2',
                'name': 'apples chopped into 1.4 inch pieces',
                'type': 'Produce'
            },
            {
                'quantity': '1/2 cup',
                'name': 'dried cranberries',
                'type': 'Produce'
            },
            {
                'quantity': '1 teaspoon',
                'name': 'cinnamon',
                'type': 'Baking'
            },
            {
                'quantity': '2 tablespoons',
                'name': 'melted butter',
                'type': 'Dairy'
            }
        ],
        'steps': [
            'Cut squash in half, remove seeds.',
            'Place squash in baking dish, cut-side down.',
            'Pour 1/4-inch water into dish.',
            'Bake for 30 minutes at 350 degrees F.',
            'In large bowl, combine remaining ingredients.',
            'Remove squash from oven, fill with mix.',
            'Bake for 30-40 more minutes, until squash tender.',
            'Enjoy!'
        ],
        'timers': [
            0,
            0,
            0,
            30,
            0,
            0,
            30,
            0
        ],
        'imageURL': 'cranberry_and_apple.jpg',
        'originalURL': ''
    },
    {
        'name': 'Mic\'s Yorkshire Puds',
        'ingredients': [
            {
                'quantity': '200g',
                'name': 'plain flour',
                'type': 'Baking'
            },
            {
                'quantity': '3',
                'name': 'eggs',
                'type': 'Dairy'
            },
            {
                'quantity': '300ml',
                'name': 'milk',
                'type': 'Dairy'
            },
            {
                'quantity': '3 tbsp',
                'name': 'vegetable oil',
                'type': 'Condiments'
            }
        ],
        'steps': [
            'Put the flour and some seasoning into a large bowl.',
            'Stir in eggs, one at a time.',
            'Whisk in milk until you have a smooth batter.',
            'Chill in the fridge for at least 30 minutes.',
            'Heat oven to 220C/gas mark 7.',
            'Pour the oil into the holes of a 8-hole muffin tin.',
            'Heat tin in the oven for 5 minutes.',
            'Ladle the batter mix into the tin.',
            'Bake for 30 minutes until well browned and risen.'
        ],
        'timers': [
            0,
            0,
            0,
            30,
            0,
            0,
            5,
            0,
            30
        ],
        'imageURL': 'mics_yokshire_puds.jpg',
        'originalURL': 'http://upload.wikimedia.org/wikipedia/commons/f/f9/Yorkshire_Pudding.jpg'
    },
    {
        'name': 'Old-Fashioned Oatmeal Cookies',
        'ingredients': [
            {
                'quantity': '1 cup',
                'name': 'raisins',
                'type': 'Produce'
            },
            {
                'quantity': '1',
                'name': 'cup water',
                'type': 'Drinks'
            },
            {
                'quantity': '3/4 cup',
                'name': 'shortening',
                'type': 'Baking'
            },
            {
                'quantity': '1 1/2 cups',
                'name': 'sugar',
                'type': 'Baking'
            },
            {
                'quantity': '2 1/2 cups',
                'name': 'flour',
                'type': 'Baking'
            },
            {
                'quantity': '1 tsp.',
                'name': 'soda',
                'type': 'Baking'
            },
            {
                'quantity': '1 tsp.',
                'name': 'salt',
                'type': 'Baking'
            },
            {
                'quantity': '1 tsp.',
                'name': 'cinnamon',
                'type': 'Baking'
            },
            {
                'quantity': '1/2 tsp.',
                'name': 'baking powder',
                'type': 'Baking'
            },
            {
                'quantity': '1/2 tsp.',
                'name': 'cloves',
                'type': 'Baking'
            },
            {
                'quantity': '2 cups',
                'name': 'oats',
                'type': 'Baking'
            },
            {
                'quantity': '1/2 cup',
                'name': 'chopped nuts',
                'type': 'Baking'
            }
        ],
        'steps': [
            'Simmer raisins and water over medium heat until raisins are plump, about 15 minutes.',
            'Drain raisins, reserving the liquid.',
            'Add enough water to reserved liquid to measure 1/2 cup.',
            'Heat oven to 400°.',
            'Mix thoroughly shortening, sugar, eggs and vanilla.',
            'Stir in reserved liquid.',
            'Blend in remaining ingredients.',
            'Drop dough by rounded teaspoonfuls about 2 inches apart onto ungreased baking sheet.',
            'Bake 8 to 10 minutes or until light brown.',
            'About 6 1/2 dozen cookies.'
        ],
        'timers': [
            15,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            8,
            0
        ],
        'imageURL': 'old_fashioned_oatmeal.jpg',
        'originalURL': '#'
    },
    {
        'name': 'Blueberry Oatmeal Squares',
        'ingredients': [
            {
                'quantity': '2-1/2 cups',
                'name': 'rolled oats, (not instant)',
                'type': 'Baking'
            },
            {
                'quantity': '1-1/4 cups',
                'name': 'all-purpose flour',
                'type': 'Baking'
            },
            {
                'quantity': '1 tbsp',
                'name': 'grated orange rind',
                'type': 'Produce'
            },
            {
                'quantity': '1/4 tsp',
                'name': 'salt',
                'type': 'Baking'
            },
            {
                'quantity': '1 cup',
                'name': 'cold butter, cubed',
                'type': 'Baking'
            },
            {
                'quantity': '3/4 cup',
                'name': 'packed brown sugar',
                'type': 'Baking'
            },
            {
                'quantity': '3 cups',
                'name': 'fresh blueberries',
                'type': 'Produce'
            },
            {
                'quantity': '1/2 cup',
                'name': 'granulated sugar',
                'type': 'Baking'
            },
            {
                'quantity': '1/3 cup',
                'name': 'orange juice',
                'type': 'Produce'
            },
            {
                'quantity': '4 tsp',
                'name': 'cornstarch',
                'type': 'Baking'
            }
        ],
        'steps': [
            // tslint:disable-next-line:max-line-length
            'Filling: In saucepan, bring blueberries, sugar and orange juice to boil; reduce heat and simmer until tender, about 10 minutes.',
            'Whisk cornstarch with 2 tbsp (25 mL) water; whisk into blueberries and boil, stirring, until thickened, about 1 minute.',
            'Place plastic wrap directly on surface; refrigerate until cooled, about 1 hour.',
            // tslint:disable-next-line:max-line-length
            'In large bowl, whisk together oats, flour, sugar, orange rind and salt ; with pastry blender, cut in butter until in coarse crumbs.',
            'Press half into 8-inch (2 L) square parchment paper–lined metal cake pan; spread with blueberry filling.',
            'Bake in centre of 350°F oven until light golden, about 45 minutes.',
            'Let cool on rack before cutting into squares.',
            '(Make-ahead: Cover and refrigerate for up to 2 days or overwrap with heavy-duty foil and freeze for up to 2 weeks.)'
        ],
        'timers': [
            10,
            1,
            60,
            0,
            0,
            45,
            0,
            0
        ],
        'imageURL': 'blueberry_oatmeal_squares.jpeg',
        'originalURL': 'http://www.canadianliving.com/food/blueberry_oatmeal_squares.php'
    },
    {
        'name': 'Curried chicken salad',
        'ingredients': [
            {
                'quantity': '3',
                'name': 'skinless, boneless chicken breasts, halved lengthwise',
                'type': 'Meat'
            },
            {
                'quantity': '1/2 cup',
                'name': 'mayonnaise',
                'type': 'Baking'
            },
            {
                'quantity': '1 tbsp',
                'name': 'lemon zest',
                'type': 'Produce'
            },
            {
                'quantity': '1 tbsp ',
                'name': 'lemon juice',
                'type': 'Produce'
            },
            {
                'quantity': '1 1/2 tsp',
                'name': 'curry powder',
                'type': 'Baking'
            },
            {
                'quantity': '1/4 tsp',
                'name': 'salt',
                'type': 'Baking'
            },
            {
                'quantity': '2',
                'name': 'ripe mangoes, diced',
                'type': 'Produce'
            },
            {
                'quantity': '1/4 cup',
                'name': 'dried cranberries',
                'type': 'Produce'
            },
            {
                'quantity': '2',
                'name': 'green onions, thinly sliced',
                'type': 'Produce'
            },
            {
                'quantity': '1',
                'name': 'celery stalk, finely chopped',
                'type': 'Produce'
            },
            {
                'quantity': '6 leaves',
                'name': 'Boston lettuce',
                'type': 'Produce'
            },
            {
                'quantity': '6',
                'name': 'English muffins, toasted',
                'type': 'Misc'
            }
        ],
        'steps': [
            'ARRANGE chicken in a single layer in a large pot.',
            'Add water to just cover.',
            'Bring to a boil over medium-high.',
            'Flip chicken, reduce heat to medium and simmer until cooked, about 6 more min.',
            'Cool.',
            'STIR mayo with lemon zest, juice, curry and salt in large bowl.',
            'Using 2 forks, shred chicken, then stir into mayo mixture with mango, cranberries, green onions and celery.',
            'Divide among muffins with lettuce leaves',
            'Sandwich with tops'
        ],
        'timers': [
            0,
            0,
            0,
            6,
            0,
            0,
            0,
            0,
            0
        ],
        'imageURL': 'curried_chicken_salad.jpg',
        'originalURL': 'http://www.chatelaine.com/recipe/stovetop-cooking-method/curried-chicken-salad/'
    }
];


/***/ }),

/***/ "../../../../../src/app/my-recipes/my-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"col-sm\">\n  <p class=\"my-3\"><strong>My Recipes</strong></p>\n\n<mat-accordion>\n    <mat-expansion-panel *ngFor=\"let recipe of recipeData\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n        {{ recipe.name }}\n        </mat-panel-title>\n        <mat-panel-description>\n          <!-- Text Description -->\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <div class=\"row\">\n         <div *ngIf=\"recipe.imageURL\" class=\"col-sm mb-2\">\n          <img src=\"assets/images/{{recipe.imageURL}}\" class=\"w-100\">\n        </div>\n        <div class=\"col-sm\">\n          <strong>Ingredients:</strong>\n          <ul>\n            <li *ngFor=\"let ingredient of recipe.ingredients\">\n              {{ ingredient.quantity}} {{ingredient.name}} {{ingredient.type}}\n            </li>\n          </ul>\n          <div>\n            <strong class=\"d-block\">Steps: </strong>\n            <ol>\n              <li *ngFor=\"let step of recipe.steps\">\n                {{ step }}\n              </li>\n            </ol>\n          </div>\n          </div>\n      </div>\n     \n      \n    </mat-expansion-panel>\n  </mat-accordion>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/my-recipes/my-recipes.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-recipes/my-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyRecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_recipes_model__ = __webpack_require__("../../../../../src/app/models/recipes.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyRecipesComponent = /** @class */ (function () {
    function MyRecipesComponent() {
    }
    MyRecipesComponent.prototype.ngOnInit = function () {
        this.recipeData = __WEBPACK_IMPORTED_MODULE_1__models_recipes_model__["a" /* RECIPES */];
    };
    MyRecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-recipes',
            template: __webpack_require__("../../../../../src/app/my-recipes/my-recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-recipes/my-recipes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MyRecipesComponent);
    return MyRecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipe-ideas/recipe-ideas.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"col-sm\">\n    <p class=\"my-3\"><strong>Recipes you can try</strong><small> with available ingredients</small></p>\n  \n  <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let recipe of canTryRecipes\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n          {{ recipe.name }}\n          </mat-panel-title>\n          <mat-panel-description>\n            <!-- Text Description -->\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n        <div class=\"row\">\n           <div *ngIf=\"recipe.imageURL\" class=\"col-sm mb-2\">\n            <img src=\"assets/images/{{recipe.imageURL}}\" class=\"w-100\">\n          </div>\n          <div class=\"col-sm\">\n            <strong>Ingredients:</strong>\n            <ul>\n              <li *ngFor=\"let ingredient of recipe.ingredients\">\n                {{ ingredient.quantity}} {{ingredient.name}} {{ingredient.type}}\n              </li>\n            </ul>\n            <div>\n              <strong class=\"d-block\">Steps: </strong>\n              <ol>\n                <li *ngFor=\"let step of recipe.steps\">\n                  {{ step }}\n                </li>\n              </ol>\n            </div>\n            </div>\n        </div>\n       \n        \n      </mat-expansion-panel>\n    </mat-accordion>\n  \n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/recipe-ideas/recipe-ideas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-ideas/recipe-ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeIdeasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeIdeasComponent = /** @class */ (function () {
    function RecipeIdeasComponent(recipeService) {
        this.recipeService = recipeService;
    }
    RecipeIdeasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeData = __WEBPACK_IMPORTED_MODULE_1__models__["b" /* RECIPES */];
        this.canTryRecipes = this.recipeData.filter(function (item) { return _this.canBeTried(item); });
    };
    RecipeIdeasComponent.prototype.canBeTried = function (item) {
        return this.recipeService.isSubSet(__WEBPACK_IMPORTED_MODULE_1__models__["a" /* AVAILABLE_INGREDIENTS */], item.ingredients);
    };
    RecipeIdeasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-ideas',
            template: __webpack_require__("../../../../../src/app/recipe-ideas/recipe-ideas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipe-ideas/recipe-ideas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], RecipeIdeasComponent);
    return RecipeIdeasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeService = /** @class */ (function () {
    function RecipeService() {
    }
    RecipeService.prototype.isSubSet = function (availableIngredients, recipeIngredients) {
        var _this = this;
        return recipeIngredients.every(function (item) { return _this.getNames(availableIngredients).indexOf(item.name) > -1; });
    };
    RecipeService.prototype.toBuy = function (recipes, availableIngredients) {
        var _this = this;
        var allRequiredIngredients = this.getIngredients(recipes);
        var itemsToBuy = allRequiredIngredients.filter(function (item) {
            return _this.getNames(availableIngredients).indexOf(item.name) === -1;
        });
        return itemsToBuy;
    };
    RecipeService.prototype.getIngredients = function (recipes) {
        var allRequiredIngredients = [];
        recipes.forEach(function (item) {
            item.ingredients.forEach(function (ingredient) {
                allRequiredIngredients.push(ingredient);
            });
        });
        return allRequiredIngredients;
    };
    RecipeService.prototype.getNames = function (ingredients) {
        var names = [];
        ingredients.forEach(function (item) {
            names.push(item.name);
        });
        return names;
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"col-sm\">\n  <p class=\"my-3\">\n    <strong>Shopping List</strong></p>\n  \n  <mat-list role=\"list\" dense>\n    <mat-list-item role=\"listitem\" *ngFor=\"let item of recipesToBuy\">\n        <mat-checkbox>{{ item.quantity }} {{ item.name }} {{ item.type }}</mat-checkbox> \n    </mat-list-item>\n  </mat-list>\n\n  </section>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models__ = __webpack_require__("../../../../../src/app/models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        this.needToBuy();
    };
    ShoppingListComponent.prototype.needToBuy = function () {
        this.recipesToBuy = this.recipeService.toBuy(__WEBPACK_IMPORTED_MODULE_1__models__["b" /* RECIPES */], __WEBPACK_IMPORTED_MODULE_1__models__["a" /* AVAILABLE_INGREDIENTS */]);
    };
    ShoppingListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-shopping-list',
            template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map