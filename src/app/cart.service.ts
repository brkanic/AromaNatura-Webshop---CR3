  import { Injectable } from '@angular/core';
import { Iproduct } from './Iproduct';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})

export class CartService {
    items: Iproduct[]=[];
   
    
      constructor() { }
    
      addToCart(product: Iproduct){
        if (this.items.find((val) => val.name == product.name)) {
          product.qtty++;
        } else {
          this.items.push(product);
        }
       };
       
       cartTotal (product: Iproduct[]) {
        let total = 0;
        for (let  item of product) {
          total += item.price * item.qtty;
        }
        return total
       };
    
       plusQtty  (index:number) {
       this.items[index].qtty++;
       };
    
       minusQtty (index:number) {
        if (this.items[index].qtty == 1) {
          this.items.splice(index, 1);
        } else {
          this.items[index].qtty--;
        }
       };
    
      getItem(){
          return this.items
      }
    
      clearCart(){
        this.items=[];
        return this.items;
      }
      removeFromCart(index:number) {
        this.items.splice(index, 1);
      }

      cartTotalWithServiceAndDiscount(products: Iproduct[]): { total: number, serviceCharge: number, discountedAmount: number }{
        let total = this.cartTotal(products);
        let serviceCharge = total * 0.1; // 10% service charge
        let totalWithService = total + serviceCharge;
        let discountedAmount = 0;
      
        if (totalWithService > 40) {
          let discount = totalWithService * 0.15; // 15% discount
          discountedAmount = discount;
          totalWithService -= discount;
        }
      
        return { total: total, serviceCharge: serviceCharge, discountedAmount: discountedAmount };}
        
  
     }
  
     