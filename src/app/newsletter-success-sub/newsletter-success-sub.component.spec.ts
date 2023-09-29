import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSuccessSubComponent } from './newsletter-success-sub.component';

describe('NewsletterSuccessSubComponent', () => {
  let component: NewsletterSuccessSubComponent;
  let fixture: ComponentFixture<NewsletterSuccessSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterSuccessSubComponent]
    });
    fixture = TestBed.createComponent(NewsletterSuccessSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
