import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponComponent } from './coupon/coupon.component';
import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TableComponent, CouponComponent, OrderComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

}
