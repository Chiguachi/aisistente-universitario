import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";

// fn es como una funcion
export const authGuard: CanActivateFn=() => {
  const router=inject(Router);

  const  autenticado= sessionStorage.getItem('login') === 'true';

  if(autenticado){
    return true;
  }
  return router.navigate(['auth/login'])

  // simplemente esto es un guard para un login

} 