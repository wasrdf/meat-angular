import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restautants/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menus: MenuItem[]

  constructor(private restaurantService: RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.loadMenu(this.route.parent.snapshot.params['id'])
      .subscribe(menus => this.menus = menus)
  }

}
