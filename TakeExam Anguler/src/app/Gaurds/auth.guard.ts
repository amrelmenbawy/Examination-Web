import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route :ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  const router = Inject (Router);
  const token = localStorage.getItem("token");
  if(token){
    return true;
  }
  else{
    router.navigate(['/login']);
    return false;
  }

};
