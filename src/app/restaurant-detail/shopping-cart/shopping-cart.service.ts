import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = []

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem) {
            foundItem.quantity = foundItem.quantity + 1
        } else {
            console.log('aqui')
            this.items.push(new CartItem(item))             
        }
    }

    clear() {
        this.items = []
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
        .map(item => item.value())
        .reduce((prev , value) => prev+value, 0)
    }

}