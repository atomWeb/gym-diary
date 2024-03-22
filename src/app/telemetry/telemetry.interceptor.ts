import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

export const telemetryInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.headers.get('X-TELEMETRY') !== 'true') {
    return next(req);
  }
  const started = Date.now();
  return next(req).pipe(
    finalize(() => {
      const elapsed = Date.now() - started;
      const message = `${req.method} "${req.urlWithParams}" in ${elapsed} ms.`;
      console.log(message);
    })
  );
};
