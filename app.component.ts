import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CoursesComponent} from "./courses/courses.component";
@Component({
  selector: 'app-root',
  imports: [CoursesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Sample Angular App';
  desc = 'My First Sample Angular Application';
}
