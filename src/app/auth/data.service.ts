import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    // Replace with actual data fetching logic
    return of({ key: 'value' });
  }
}
