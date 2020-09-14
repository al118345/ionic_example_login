import { Injectable } from '@angular/core';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ComunicacionesService {
  public user: User;


  constructor() {
    try {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } catch (e) {
      const currentUser = '';
    }
  }



  login(username: string, password: string): boolean {
    const xhr = new XMLHttpRequest();
    const data = {
      'user': username,
      'passwd': password
    };
    localStorage.clear();
    xhr.open('POST', 'http://multimedia.uoc.edu/frontend/auth.php', false);
    //xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload  = function() {
      return xhr.response;
      // do something with jsonResponse
    };
    xhr.send('user=demo&passwd=demo');

    console.log(JSON.parse(xhr.responseText).status);
    if ( JSON.parse(xhr.responseText).status  !== 'OK') {
      return false;
    } else {
      this.user = new User(username, password);
      localStorage.setItem('currentUser', this.user.to_json() );
      return true;
    }
  }


  logout(): void {
    localStorage.setItem('currentUser', '');
    localStorage.removeItem('currentUser');
  }


}
