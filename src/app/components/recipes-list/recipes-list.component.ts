import { Component, OnInit, inject } from '@angular/core';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit{
  public recipesService = inject(RecipesService)
  
  ngOnInit(): void {
    this.recipesService.getData()
  }
}

