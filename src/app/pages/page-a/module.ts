import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAComponent } from './page-a.component';
import { ComponentsModule } from 'src/app/components/module';
import { PageARoutingModule } from './routing';



@NgModule({
  declarations: [
    PageAComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PageARoutingModule,
  ]
})
export class PageAModule { }
