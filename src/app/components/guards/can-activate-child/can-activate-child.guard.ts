import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  // Implement your logic here
  const hasAccess = true; // Replace with actual access logic
  return hasAccess;
};
