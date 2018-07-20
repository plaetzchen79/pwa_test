import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { PushService } from './push-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private PUBLIC_KEY =
    'BJ52Yp_k-RZXH8KyCEgKMTA8voMG70saSfLpj37Y5TkcaX0DGyjO9e50NOO5cIiY8dvaBYLM3jr2QQe_AuHbXoY';

  sub: PushSubscription;

  title = 'My first PWA test!';

  constructor(
    private swUpdate: SwUpdate,
    private swPushListener: SwPush,
    private pushService: PushService
  ) {
    console.log(this.PUBLIC_KEY);

    // check for Updates via swUpdateService
    this.checkForUpdates();

    // subscripe to messages / push notifications
    // and listen to new ones - needs a push server
    this.registerToPushNotifications();
  }

  /**
   * Check and register for updates
   */
  private checkForUpdates() {
    console.log('subscribe to updates');

    this.swUpdate.available.subscribe(event => {
      console.log('current version i:s', event.current);
      console.log('new available version is:', event.available);
      // you can ask the user herere
      // if (promptUser(event)) {
      // //  swUpdate.activateUpdate().then(() => document.location.reload());
      // }
    });
    this.swUpdate.activated.subscribe(event => {
      console.log('old version was:', event.previous);
      console.log('new version is:', event.current);
    });
  }

  /**
   * stub to subscribe to push
   * no server for notifications in here..
   */
  private registerToPushNotifications() {
    this.swPushListener
      .requestSubscription({ serverPublicKey: this.PUBLIC_KEY })
      .then(sub => {
        this.sub = sub;
        console.log('sub:', this.sub.toJSON());
        this.pushService.addSubscriber(this.sub).subscribe(result => {
          console.log('Add subscriber request answer', result);
        });
      });
    this.swPushListener.messages.subscribe(message => {
      console.log('Message received', message);
    });
  }
}
