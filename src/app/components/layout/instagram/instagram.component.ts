import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Instagrams } from 'shared/enums/images';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css'],
})
export class InstagramComponent {
  currentImageIndex: number = 0;
  images: string[] = Instagrams;
  currentIndex: number = 0;
  visibleImages: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateVisibleImages();
  }

  updateVisibleImages(): void {
    this.visibleImages = this.images.slice(
      this.currentIndex,
      this.currentIndex + 4.5
    );
    console.log(this.visibleImages);
  }

  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.updateVisibleImages();
    } else {
      this.currentIndex = this.images.length - 4.5;
    }
  }

  nextImage(): void {
    if (this.currentIndex + 4.5 < this.images.length) {
      this.currentIndex += 1;
      this.updateVisibleImages();
    } else {
      this.currentIndex = 0;
      this.updateVisibleImages();
    }
  }
}
