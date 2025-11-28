import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
// import { ENVIRONMENT } from '../environments/environment'; 
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { Loader } from './shared/loader/loader';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader], 
  templateUrl: './app.html',
  styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  loader = inject(LoaderService);
  protected title = 'showlab-web';
  // apiUrl: string;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // this.apiUrl = ENVIRONMENT.baseUrls.baseAPIUrl; 
    
 this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.viewportScroller.scrollToPosition([0, 0]);
      });

  }

}