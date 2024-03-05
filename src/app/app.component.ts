import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChocolateDataService } from './services/chocolate.service';
import { Observable } from 'rxjs';
import { Chocolate } from './interfaces/chocolate';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'chocolate-challenge';
  chocolateData$: Observable<Chocolate[]> = this.chocolateService.getChocolateData();

  constructor(private chocolateService: ChocolateDataService) {}
}
