import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule],
  templateUrl: './index.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  runAnim(): void {
    console.log("test")
    const animatedElements = this.el.nativeElement.querySelectorAll('.leaf, .grass_blade, .flower_container');
    animatedElements.forEach((element: HTMLElement) => {
      this.renderer.setStyle(element, 'animation-play-state', 'running');
    });
  }
}
