import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestModule } from './test/test.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TestModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-one';
}
