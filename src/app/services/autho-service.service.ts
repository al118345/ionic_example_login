import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ComunicacionesService} from './comunicaciones.service';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthoServiceService {

  currentUser: User;
  logueado: boolean;
  constructor(
              private comunicaciones: ComunicacionesService
  ) {}



//función para  realizar el login
  login(credentials): Observable<boolean> {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.logueado = false;
      return Observable.create(observer => {
        //nos comunicamos con el servicio web de login y con el resultado  que nos proporcione redirigimos al hombe o nos quedamos en el
        //login
        const  result = this.comunicaciones.login( credentials.email, credentials.password)
              if (result === true) {
                // login successful
                this.currentUser = credentials;
                //vamos a home
                observer.next(true);
                observer.complete();
              } else {
                // login failed
                this.currentUser = credentials;
                // Volvemos a pedir la introducción de los datos.
                observer.next(false);
                observer.complete();
              }
            });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  //en producción, aún no funciona.
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
