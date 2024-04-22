  import { Component, OnInit } from '@angular/core';
  import { Iproduct } from '../Iproduct';
  import { CartService } from '../cart.service';
import { FormControl, FormGroup } from '@angular/forms';

  
  @Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css'
  })
  export class CartComponent implements OnInit{
    items: Iproduct[]=[];
  
    total: number=0;

    displayForm: boolean = false;

    deliveryForm = new FormGroup({
      exampleInputEmail: new FormControl (''),
      Name: new FormControl(''),
      Tel: new FormControl (''),
      address: new FormControl(''),
      message: new FormControl(''),

     });
  
    constructor(private cartService: CartService){}
  
   
  
    serviceCharge: number = 0;
    discountedAmount: number = 0;
    totalWithDiscount: number = 0;
    
    cartTotal() {
      const { total, serviceCharge, discountedAmount } = this.cartService.cartTotalWithServiceAndDiscount(this.items);
      this.total = total;
      this.serviceCharge = serviceCharge;
      this.discountedAmount = discountedAmount;
      this.totalWithDiscount = total - discountedAmount;
    }
    
    ngOnInit(): void {
      this.items = this.cartService.getItem();
      this.cartTotal();
      
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
      this.cartTotal();
      };
    
      minusQtty (index:number) {
        this.cartService.minusQtty(index);
        this.total = this.cartService.cartTotal(this.items);
        this.cartTotal();
       };

        
       showForm() {
        this.displayForm = true;
      }

      onSubmit() {
        console.warn('Your order has been submitted', this.deliveryForm.value);
        this.items = this.cartService.clearCart();
        this.deliveryForm.reset();
        this.cartTotal();
      }
    }