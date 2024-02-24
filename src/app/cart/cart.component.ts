import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../Iproduct';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  items: Iproduct[]=[];

  total: number=0;

  constructor(private cartService: CartService){}

  cartTotal(){
    this.total=this.cartService.cartTotal(this.items);  
  }
  
  clearCart() {
    this.items = this.cartService.clearCart();
  }
  

  removeFromCart(index:number){
    this.cartService.removeFromCart(index);
    this.total = this.cartService.cartTotal(this.items);
  }
  plusQtty  (index:number) {
    this.cartService.plusQtty(index);
    this.total = this.cartService.cartTotal(this.items);
    };
  
    minusQtty (index:number) {
      this.cartService.minusQtty(index);
      this.total = this.cartService.cartTotal(this.items);
     };
     ngOnInit(): void {
      this.items = this.cartService.getItem();
    this.total = this.cartService.cartTotal(this.items);
    }}
  

