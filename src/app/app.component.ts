import { Component } from '@angular/core';
import { NewsletterBodyComponent } from './app/newsletter-body/newsletter-body.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NewsletterBodyComponent]
})
export class AppComponent {
  title = 'newsletter-sign-up';
}
