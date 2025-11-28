import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
 templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports:[CommonModule]
})
export class Home {
private loader=inject(LoaderService);
 private searchSubject = new Subject<string>();
  loading = false;
  results: string[] = [];

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(5000), // wait 500ms after user stops typing
        switchMap(query => {
          this.loader.show();
          return this.fakeApi(query)})
      )
      .subscribe((res: string[]) => {
        this.results = res;
       this.loader.hide()
      });
  }

 

  onSearch(event: any) {
    const value = event.target.value;
  
    this.searchSubject.next(value);
  }

  // Mock API (replace with real API call)
  fakeApi(query: string) {
    return new Promise<string[]>((resolve) => {
      setTimeout(() => {
        resolve([
          `Result for "${query}" #1`,
          `Result for "${query}" #2`,
          `Result for "${query}" #3`
        ]);
      }, 5000);
    });
  }
}