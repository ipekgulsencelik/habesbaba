import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { OfferComponent } from './offer/offer.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BlogComponent, CategoryComponent, OfferComponent, ProductComponent, SliderComponent, RouterModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}