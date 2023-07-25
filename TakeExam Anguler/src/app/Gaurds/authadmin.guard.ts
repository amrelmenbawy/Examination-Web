import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Inject } from '@angular/core';

export const authadminGuard: CanActivateFn = (route, state) => {
  const router = Inject (Router);
  const admin = localStorage.getItem("role");
  if(admin){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }
};
