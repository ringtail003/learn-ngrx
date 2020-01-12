import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import * as MovieState from './state/movies';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      movies: MovieState.reducer,
    }),
    EffectsModule.forRoot([
      MovieState.Effects,
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 5,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
