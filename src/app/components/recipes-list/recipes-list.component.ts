import { Component } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

}
