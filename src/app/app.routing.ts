import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomePage} from './home/home.page';



const appRoutes: Routes = [
  { path: 'login', component: HomePage },
  { path: 'home', component: LoginComponent },
  { path: '**',  component: HomePage }
];

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
