import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-newsletter-success-sub',
  templateUrl: './newsletter-success-sub.component.html',
  styleUrls: ['./newsletter-success-sub.component.scss']
})
export class NewsletterSuccessSubComponent implements OnInit, OnDestroy {
  private sub?: Subscription;

  email = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: Params) => {
      if(params['email']) {
        this.email = params['email'];
      }
    });
  }

  dismiss() {
    this.router.navigate(['/'], {
      replaceUrl: true
    });
  }

  ngOnDestroy(): void {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }
}
