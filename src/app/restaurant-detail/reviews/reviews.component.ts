import { Review } from './review.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../restautants/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Review[]

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
      .subscribe(review => this.reviews = review)
  }

}
