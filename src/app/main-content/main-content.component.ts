import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuComponent } from './menu/menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsComponent } from './find-us/find-us.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent,
    MenuComponent,
    HowToOrderComponent,
    FindUsComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
