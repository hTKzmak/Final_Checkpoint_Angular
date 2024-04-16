import { Component, inject } from '@angular/core';
import { RecipeItemComponent } from '../../components/recipe-item/recipe-item.component';
import { MoreRecipesListComponent } from '../../components/more-recipes-list/more-recipes-list.component';
import { Location } from '@angular/common'
import { RecipesService } from '../../services/recipes.service';
import { ChoosenRecipeComponent } from '../../components/choosen-recipe/choosen-recipe.component';

@Component({
  selector: 'app-recipe-item-page',
  standalone: true,
  imports: [MoreRecipesListComponent, ChoosenRecipeComponent],
  templateUrl: './recipe-item-page.component.html',
  styleUrl: './recipe-item-page.component.css'
})
export class RecipeItemPageComponent {
  public recipesService = inject(RecipesService)

  constructor(private location: Location) {}

  goBackToPrevPage(): void {
    this.location.back();
  }
}
