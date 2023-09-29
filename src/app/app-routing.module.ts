import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { NewsletterBodyComponent } from "./newsletter-body/newsletter-body.component";

const routes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./newsletter-body/newsletter-body.component').then(m => m.NewsletterBodyComponent)
    },
    {
        path: 'success',
        loadComponent: () => import('./newsletter-success-sub/newsletter-success-sub.component').then(m => m.NewsletterSuccessSubComponent)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}