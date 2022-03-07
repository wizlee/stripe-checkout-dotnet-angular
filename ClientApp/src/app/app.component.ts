import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { switchMap } from 'rxjs/operators';
import { StripeService } from 'ngx-stripe';

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
        switchMap(session => {
          return this.stripeService.redirectToCheckout({ sessionId: session.id })
        })
      )
      .subscribe(result => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (result.error) {
          alert(result.error.message);
        }
      });
  }
}

interface Session {
  id: string;
}
