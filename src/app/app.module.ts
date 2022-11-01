import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DeaComponent } from './dea/dea.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DeaModule } from './dea/dea.module';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './auth.guard';
import { StoreModule } from '@ngrx/store';
import { counterReducer, levelReducer } from './counter.reducer';
import { GojsAngularModule } from "gojs-angular";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProfileComponent } from './profile/profile.component'; // Angular CLI environment
import { StartGameModule } from './start-game/start-game.module';
import { StartGameComponent } from './start-game/start-game.component';
import { HttpClientModule } from '@angular/common/http';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PuzzleModule } from './puzzle/puzzle.module';
import { DialogDataExampleDialog, PuzzleGameComponent } from './puzzle-game/puzzle-game.component';
import { CommonModule } from '@angular/common';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'master',
        clientId: 'puzzle-frontend',
      },
      initOptions: {

        pkceMethod: 'S256',
        // must match to the configured value in keycloak
        redirectUri: 'http://localhost:4200/your_url',
        // this will solved the error
        checkLoginIframe: false
      }
    });
}


const appRoutes: Routes = [
  { path: '', component: StartGameComponent },
  { path: 'login', redirectTo: '/startgame' },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'docu', component: MainPageComponent },

  {
    path: 'home',
    component: StartGameComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'startgame',
    component: PuzzleGameComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', component: StartGameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DialogDataExampleDialog,
    FooterComponent,
    MainPageComponent,
    LoginComponent,
    //RegisterComponent,
    DialogComponent,
    ProfileComponent,
    PuzzleGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CommonModule,
    //DeaModule,
    PuzzleModule,
    MatDialogModule,
    HttpClientModule,
    KeycloakAngularModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer, level: levelReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 12,
      logOnly: environment.production,
    }),
    GojsAngularModule,

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
