import { HttpInterceptorFn, HttpEvent, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const htmlInterceptor: HttpInterceptorFn = (request, next) => {
  return next(request).pipe(
    map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && event.headers.get('Content-Type')?.includes('text/html')) {
        const modifiedBody = event.body.replace('<h1>', '<h1 style="color: red;">');
        return event.clone({ body: modifiedBody });
      }
      return event;
    })
  );
};
