import { HttpInterceptorFn } from '@angular/common/http';

export const hostInterceptor: HttpInterceptorFn = (req, next) => {
  const url = 'http://localhost:3000';
  const resource = req.url;
  if (req.url.includes('http')) {
    return next(req);
  }
  const urlsReq = req.clone({
    url: `${url}/${resource}`,
  });
  return next(urlsReq);
};
