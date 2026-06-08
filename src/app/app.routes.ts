import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Login } from './Pages/login/login';
import { Users } from './Pages/users/users';
import { UserDetails } from './Pages/user-details/user-details';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about',component:About},
    {path:'login/:name',component:Login},
    {path:'users',component:Users},
    {path:'user-detail/:id',component:UserDetails},
    {path:'**',redirectTo:''},
];
