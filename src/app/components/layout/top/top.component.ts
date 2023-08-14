import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

}

