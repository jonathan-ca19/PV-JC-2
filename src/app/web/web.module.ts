import { NgModule } from '@angular/core';
import { CommonModule, provideCloudflareLoader } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { WebComponent } from './web.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    DashboardComponent,
    WebComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ProductComponent,
  CategoryComponent,
  DashboardComponent,
  WebComponent]
})
export class WebModule { }
