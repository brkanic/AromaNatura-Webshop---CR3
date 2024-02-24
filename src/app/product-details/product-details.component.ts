import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { products } from '../products';
import { Iproduct } from '../Iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

  export class ProductDetailsComponent implements OnInit{
    product: Iproduct= {} as Iproduct;
    id: number=0;
   
    constructor(private route: ActivatedRoute, private cartService: CartService){}
   
    addToCart(){
     this.cartService.addToCart(this.product);
    }
    ngOnInit(): void {
       this.id = this.route.snapshot.params["productId"];
       this.product = products[this.id];
     };
    }

