# PwaTest

A simple Test to show Angular 6 PWA and ServiceWorker functionality.
A simple example how to use update and push-servers can bee seen in the src/app/app-component.ts

## How to start
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

Run  `ng build --prod` to create the PWA in the /dist folder.
Run a local http-server in the dist folder.
`cd .\dist\pwa-test\`
`http-serve`

Start browser with `http://localhost:8080/`.
Press F12 to show debug mode. 
Check tab "Application->ServiceWorker"

### Check Cache / Service Worker
- Check Network
- Stop http-server 
- Reload the app again. It should appear althoug http-server is doen
- Check Cache to see the service-worker cache working

### Check "Add to home screen"
#### Install
- To "install" the pwa to your os (windows) press F12 to show debug mode of Chrome.
- Check "Application->Manifest".
- On the right side click "Add to home screen".
- The app should be seen on the desktop without the browser-ui. And runs offline.

#### Uninstall
- Type/Open `chrome://apps/` in the chrome address-bar.
- Right click and remove it.

### Check Update Registration
The app will automatically reload if you change any of the source files.

After changing the app you have to rebuild the app.
Then start the http-sever in the dist folder again.

The SwUpdate-Subscribtion should display an update Message in the console.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

ServiceWorker Status: https://jakearchibald.github.io/isserviceworkerready/

PWA Builder: https://www.pwabuilder.com/

Beispiel PWAs zum direkt installieren:
https://pwa.rocks/

Angular-Doku:
https://angular.io/guide/service-worker-intro

Und was zum gucken:
https://www.youtube.com/watch?v=5YtNQJQu31Y

