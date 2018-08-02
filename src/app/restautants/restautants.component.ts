import { RestaurantService } from './restaurant.service';
import { Component, OnInit } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";

@Component({
  selector: "mt-restautants",
  templateUrl: "./restautants.component.html"
})
export class RestautantsComponent implements OnInit {
  
  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit() {
    this.restaurantService.restaurants()
    .subscribe(resta => this.restaurants = resta)
  }
  
  
  

}
