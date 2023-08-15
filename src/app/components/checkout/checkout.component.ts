import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { ShippingComponent } from './shipping/shipping.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent, AddressComponent, ShippingComponent, CartComponent, OrderComponent, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

}
