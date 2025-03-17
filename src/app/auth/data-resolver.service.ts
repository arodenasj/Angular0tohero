    import { Injectable } from '@angular/core';
    import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
    import { DataService } from './data.service';
    import { inject } from '@angular/core';

    @Injectable({
      providedIn: 'root'
    })
    export class DataResolverService {
      constructor(private dataService: DataService) {}

      getData() {
        return this.dataService.getData();
      }
    }

    export const dataResolver: ResolveFn<any> = (
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ) => {
      return inject(DataService).getData();
    };
