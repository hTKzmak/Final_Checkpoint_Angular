import { Routes } from '@angular/router';
import { RecipesListPageComponent } from './pages/recipes-list-page/recipes-list-page.component';
import { RecipeItemPageComponent } from './pages/recipe-item-page/recipe-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';

export const routes: Routes = [
    {path: 'breakfast', component: RecipesListPageComponent, children: [
        {path: 'all', component: RecipesListComponent},
        {path: 'easy', component: RecipesListComponent},
        {path: 'medium', component: RecipesListComponent},
        {path: '', redirectTo: '/breakfast/all', pathMatch: 'full'},
    ]},
    {path: 'lunch', component: RecipesListPageComponent, children: [
        {path: 'all', component: RecipesListComponent},
        {path: 'easy', component: RecipesListComponent},
        {path: 'medium', component: RecipesListComponent},
        {path: '', redirectTo: '/lunch/all', pathMatch: 'full'},
    ]},
    {path: 'dinner', component: RecipesListPageComponent, children: [
        {path: 'all', component: RecipesListComponent},
        {path: 'easy', component: RecipesListComponent},
        {path: 'medium', component: RecipesListComponent},
        {path: '', redirectTo: '/dinner/all', pathMatch: 'full'},
    ]},
    {path: 'recipe/:id', component: RecipeItemPageComponent},
    {path: '', redirectTo: 'breakfast/all', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent},
];
