import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBComponent } from './page-b.component';
import { ComponentsModule } from 'src/app/components/module';
import { PageBRoutingModule } from './routing';

@NgModule({
  declarations: [
    PageBComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PageBRoutingModule,
  ]
})
export class PageBModule { }
