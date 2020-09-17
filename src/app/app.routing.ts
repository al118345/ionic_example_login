import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomePage} from './home/home.page';
import {AboutComponent} from './components/about/about.component';



const appRoutes: Routes = [
  { path: 'test', component: AboutComponent },
  { path: '**',  component: AboutComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
