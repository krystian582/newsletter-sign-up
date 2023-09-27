import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBodyComponent } from './newsletter-body.component';

describe('NewsletterBodyComponent', () => {
  let component: NewsletterBodyComponent;
  let fixture: ComponentFixture<NewsletterBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsletterBodyComponent]
    });
    fixture = TestBed.createComponent(NewsletterBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
