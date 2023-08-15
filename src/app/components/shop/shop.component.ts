import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceComponent } from './price/price.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FilterComponent, ProductComponent, SearchComponent, SidebarComponent, PriceComponent, RouterModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

}
