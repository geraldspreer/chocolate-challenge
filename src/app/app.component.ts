import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChocolateDataService } from './services/chocolate.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chocolate } from './interfaces/chocolate';
import { ChocolateComponent } from './components/chocolate/chocolate.component';
import { StatsPipe } from './pipes/stats.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  // TODO: Remove what we don't need
  imports: [CommonModule, RouterOutlet, ChocolateComponent, StatsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'chocolate-challenge';
  chocolateData$: Observable<Chocolate[]> = this.chocolateService
    .getChocolate()
    .pipe(map((response) => response.data));

  constructor(private chocolateService: ChocolateDataService) {}
}
