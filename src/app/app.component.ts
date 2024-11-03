// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <router-outlet></router-outlet>
    </div>
  `,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {}
