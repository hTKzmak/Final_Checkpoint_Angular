import { Component, inject } from '@angular/core';
import { MoreRecipeItemComponent } from '../more-recipe-item/more-recipe-item.component';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-more-recipes-list',
  standalone: true,
  imports: [MoreRecipeItemComponent],
  templateUrl: './more-recipes-list.component.html',
  styleUrl: './more-recipes-list.component.css'
})
export class MoreRecipesListComponent {
  public recipesService = inject(RecipesService)
  
}
