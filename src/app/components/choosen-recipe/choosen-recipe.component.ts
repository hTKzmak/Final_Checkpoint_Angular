import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-choosen-recipe',
  standalone: true,
  imports: [],
  templateUrl: './choosen-recipe.component.html',
  styleUrl: './choosen-recipe.component.css'
})
export class ChoosenRecipeComponent {
  @Input() id: string = ''
  @Input() name: string = ''
  @Input() instructions: any = []
  @Input() calories: number = 0
  @Input() rating: number = 0
  @Input() prepTimeMinutes: number = 0
  @Input() cookTimeMinutes: number = 0
  @Input() image: string = ''

}
