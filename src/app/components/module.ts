import { NgModule } from "@angular/core";
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    MoviesPageComponent,
  ],
  exports: [
    MoviesPageComponent,
  ],
})
export class ComponentsModule {}
