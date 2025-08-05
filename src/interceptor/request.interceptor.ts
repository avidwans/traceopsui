import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs';
import { inject } from '@angular/core';

const EXCLUDED_URLS = [
  '/chat',
];

export const RequestInterceptor: HttpInterceptorFn = (req, next) => {
  const loader = inject(LoaderService);
  const shouldExclude = EXCLUDED_URLS.some(url => req.url.includes(url));

  if (shouldExclude) {
    return next(req); // Skip loader
  }
  loader.show();
  return next(req).pipe(finalize(() => loader.hide()));
};
