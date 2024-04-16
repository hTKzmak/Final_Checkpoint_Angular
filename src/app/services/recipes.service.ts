import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipesData: any[] = []
  public recipe: any = {}

  public getData(): void {
    fetch('https://dummyjson.com/recipes?limit=50')
      .then(res => res.json())
      .then(data => {
        this.recipesData = data.recipes
        console.log(this.recipesData)
      })
  }

  public getRecipe(id: string): void {
    console.log(id)
    fetch('https://dummyjson.com/recipes/' + id)
      .then(res => res.json())
      .then(data => {
        this.recipe = data
        console.log(this.recipe)
      })
  }
}
