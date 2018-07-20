import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PushService {
  constructor(private http: Http) {}

  addSubscriber(subscription) {
    const url = `http://localhost:8080/webpush`;
    console.log('[Push Service] Adding subscriber');

    const body = {
      action: 'subscribe',
      subscription: subscription
    };

    return this.http.post(url, body);
  }
}
