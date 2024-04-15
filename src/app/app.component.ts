import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { MoreRecipesListComponent } from './components/more-recipes-list/more-recipes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipesListComponent, MoreRecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
