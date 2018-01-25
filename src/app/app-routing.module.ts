import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // ":" indicates its a dinamic part.
    ] }, 
    { path: 'servers', component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ] },
    { path: 'not-found', component: PageNotFoundComponent},  
    { path: '**', redirectTo: '/not-found'}, //catch all paths that the app dont know, make sure it is the last route
];

@NgModule({
    //no need to write declarations because its declared in app.module.ts
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [ //what things are going to be accesible from outside
            RouterModule
    ]
})
export class AppRoutingModule {

}