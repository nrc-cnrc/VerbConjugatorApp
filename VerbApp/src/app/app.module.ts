import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@awesome-cordova-plugins/splash-screen/ngx";
import { StatusBar } from "@awesome-cordova-plugins/status-bar/ngx";
import { EveryVoiceModule } from "@everyvoice/every-voice";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { Network } from "@awesome-cordova-plugins/network/ngx";
// import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from "@angular/common/http";

import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { environment } from "src/environments/environment";

import { AuthService } from "@auth0/auth0-angular";
import { AUTH0_INSTANCE } from "@everyvoice/every-voice";
import { SharedComponentsModule } from "./components/shared-components.module";

@NgModule({
  declarations: [AppComponent],
  // imports: [AppRoutingModule, BrowserModule, IonicModule.forRoot(), HttpClientModule,
  //   IonicStorageModule.forRoot(), FormsModule, RouterModule],
  imports: [
    AppRoutingModule,
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RouterModule,
    FontAwesomeModule,
    EveryVoiceModule.forRoot(environment.ttsConfig),
    SharedComponentsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Network,
    {
      provide: AUTH0_INSTANCE,
      useExisting: AuthService, // Use the existing instance
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab, far);
  }
}
