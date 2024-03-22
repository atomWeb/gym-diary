import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadService } from './loading-overlay/load.service';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, LoadingOverlayComponent],
})
export class AppComponent {
  loadService = inject(LoadService);
}
