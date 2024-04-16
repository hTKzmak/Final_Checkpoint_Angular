import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-recipe-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './more-recipe-item.component.html',
  styleUrl: './more-recipe-item.component.css'
})
export class MoreRecipeItemComponent {
  @Input() id: number = 0
  @Input() name: string = ''
  @Input() cookTimeMinutes: number = 0
  @Input() image: string = ''
}
