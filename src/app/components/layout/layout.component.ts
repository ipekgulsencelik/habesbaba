import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright/copyright.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { InstagramComponent } from './instagram/instagram.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TitleComponent } from './title/title.component';
import { TopComponent } from './top/top.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, CopyrightComponent, RouterModule, FooterComponent, HeaderComponent, InstagramComponent, SearchComponent, TitleComponent, TopComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}