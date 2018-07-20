# PwaTest

A simple Test to show Angular 6 PWA and ServiceWorker functionality.
Just to give you a start.
A simple example how to use update and push-servers can bee seen in the src/app/app-component.ts

### PWA Characteristics
- Reliable (offline – no dinosaur)
- Performant / Fast
- Safe (HTTPS)
- Notifications
- Installable / Enganging (direct installation from web-page, no need for a store)
- Fresh (Up to date)  

Supported by Google, Microsoft, Intel, Apple..
More support to come.

## How to start
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The pwa does not affect ng serve.
To see a pwa in action you have to make a production build and 
use a simple http-server.

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

## Switch YOUR app to a PWA
At first: use angular 6.
Install a simple http-server (` npm install http-server -g`).

Run `ng add @angular/pwa`.
This command does:
- update your package.json
- creating config files 
   ngsw-config.json: Service Worker config
   ./src/manifest.json: Mainfest
- Register Service Worker (Bootstrap) in src/app/app.module
- something more (e.g. creating some default assets)

Look the ngsw-config.json to configure caches (assets and data).
See: https://angular.io/guide/service-worker-config#assetgroups

Look mnifest to tell the os how your pwa should be handled/ looks like.
Make a production build, switch to /dist/ and run the http-server.

## Further help

ServiceWorker Status: https://jakearchibald.github.io/isserviceworkerready/
PWA Builder: https://www.pwabuilder.com/
PWA Examples to install: https://pwa.rocks/
Official Angular documentatin: https://angular.io/guide/service-worker-intro
Something to watch: https://www.youtube.com/watch?v=5YtNQJQu31Y

