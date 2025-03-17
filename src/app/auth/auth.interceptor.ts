import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
        import { catchError, throwError } from 'rxjs';

        export const authInterceptor: HttpInterceptorFn = (request, next) => {
          const token = localStorage.getItem('auth_token');

          if (token) {
            const modifiedRequest = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            });
            return next(modifiedRequest).pipe(
              catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                  console.error('Token expirado o inválido');
                }
                return throwError(() => error);
              })
            );
          }

          return next(request);
        };
