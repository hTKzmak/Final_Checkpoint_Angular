import { Component } from '@angular/core';
import { RecipesListComponent } from '../../components/recipes-list/recipes-list.component';
import { MoreRecipesListComponent } from '../../components/more-recipes-list/more-recipes-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recipes-list-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RecipesListComponent, MoreRecipesListComponent],
  templateUrl: './recipes-list-page.component.html',
  styleUrl: './recipes-list-page.component.css'
})
export class RecipesListPageComponent {
  
}
