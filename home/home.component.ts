import { Component } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [LifecycleComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  parentValue: string = '';
}
