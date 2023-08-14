import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Instagrams } from 'shared/enums/images';

@Component({
  selector: 'app-instagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent {
  currentImageIndex: number = 0;
  images: string[] = Instagrams;
  prevImage(): void {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }
}
