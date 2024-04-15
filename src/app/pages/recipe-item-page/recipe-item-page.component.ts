import { Component } from '@angular/core';
import { RecipeItemComponent } from '../../components/recipe-item/recipe-item.component';
import { MoreRecipesListComponent } from '../../components/more-recipes-list/more-recipes-list.component';
import { Location } from '@angular/common'

@Component({
  selector: 'app-recipe-item-page',
  standalone: true,
  imports: [RecipeItemComponent, MoreRecipesListComponent, RecipeItemComponent],
  templateUrl: './recipe-item-page.component.html',
  styleUrl: './recipe-item-page.component.css'
})
export class RecipeItemPageComponent {
  constructor(private location: Location) {}

  goBackToPrevPage(): void {
    this.location.back();
  }
}
