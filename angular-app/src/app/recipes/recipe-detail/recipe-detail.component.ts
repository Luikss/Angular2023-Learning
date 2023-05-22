import { Component, Input } from '@angular/core';
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  onToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
