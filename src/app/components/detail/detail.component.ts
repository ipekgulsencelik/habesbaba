import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturedComponent } from './featured/featured.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, CarouselComponent, ReviewComponent, FeaturedComponent, RouterModule],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

}
