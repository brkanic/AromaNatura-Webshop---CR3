import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { Iproduct } from '../Iproduct';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Iproduct []= products ;
  product: Iproduct= {} as Iproduct;
  id: number=0;

  constructor(private route: ActivatedRoute, private cartService: CartService){}

  addToCart(product:Iproduct){
    this.cartService.addToCart(product);
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["productId"];
    this.product = products[this.id];
  }
}
