import { Injectable } from '@angular/core';
import { Iproduct } from './Iproduct';

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

      calculateServiceCharge(total: number): number {
        return total * 0.1;
      }
    
      calculateDiscount(total: number): number {
        if (total > 40) {
          return total * 0.15;
        }
        return 0;
      }
    
      calculateFinalTotal(total: number, discount: number): number {
        return total - discount;
      }
}
