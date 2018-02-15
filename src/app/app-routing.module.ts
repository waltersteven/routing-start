import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }, // ":" indicates its a dinamic part.
    ] }, 
    { 
        path: 'servers', 
        //canActivate: [AuthGuard], 
        canActivateChild: [AuthGuard], //protect a single route or all child routes
        component: ServersComponent, 
        children: [ //canActivate: takes all the guards you want to apply to this route, now servers is only accessible if canActivate returns true since loggedIn is true.
            { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] } //run this guard whenever we want lo leave this path
        ] 
    },
    //{ path: 'not-found', component: PageNotFoundComponent},  
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },  
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