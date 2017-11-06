import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  // all these imports are loaded eagerly (because this module is a bootstrap)
  imports: [
    // the browser module is only necessary in app module
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    // remove imports eagerly and apply lazy loading modules
    // (good practice, your client don't need to load all the features modules when load the app)
    //RecipesModule,
    //ShoppingListModule,

    AuthModule,
    SharedModule,
    // The CoreModule should be define only here (is dangerous define in each feature module. This is more dangerous
    // if the feature module is lazy loading (to understand this see video 272 and 276)
    CoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
