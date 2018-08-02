import { Restaurant } from './../restautants/restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restautants/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'  
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params['id'])
      .subscribe(r => this.restaurant = r)
  }


}
