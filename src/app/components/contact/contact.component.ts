import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormComponent, InfoComponent, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

}
