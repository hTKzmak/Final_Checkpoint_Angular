import { Component } from '@angular/core';
import { MoreRecipeItemComponent } from '../more-recipe-item/more-recipe-item.component';

@Component({
  selector: 'app-more-recipes-list',
  standalone: true,
  imports: [MoreRecipeItemComponent],
  templateUrl: './more-recipes-list.component.html',
  styleUrl: './more-recipes-list.component.css'
})
export class MoreRecipesListComponent {

}
