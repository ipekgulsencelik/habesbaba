import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ServiceComponent, TeamComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}
