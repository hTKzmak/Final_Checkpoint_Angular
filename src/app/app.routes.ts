import { Routes } from '@angular/router';
import { RecipesListPageComponent } from './pages/recipes-list-page/recipes-list-page.component';
import { RecipeItemPageComponent } from './pages/recipe-item-page/recipe-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {path: 'breakfast', component: RecipesListPageComponent},
    {path: 'recipe', component: RecipeItemPageComponent},
    {path: '', redirectTo: 'breakfast', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent},
];
