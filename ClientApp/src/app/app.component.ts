import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Stripe Checkout';

  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) { }

  checkout() {
    // Check the server.js tab to see an example implementation
    this.http.post<Session>('/create-checkout-session', {})
      .pipe(
        map(session => session.url)
        // switchMap(session => {
        //   window.location.href = session.url;
        //   return this.stripeService.redirectToCheckout({ sessionId: session.id })
        // })
      )
      .subscribe(redirectUrl => {
        if (!redirectUrl) {
          alert("invalid stripe redirect URL");
        }
        else {
          window.location.href = redirectUrl;
        }
      });
  }
}

interface Session {
  url: string;
}
