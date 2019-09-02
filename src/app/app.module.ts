import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnithaComponent } from './anitha/anitha.component';
import { AnithaFormComponent } from './anitha-form/anitha-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AnithaComponent,
    AnithaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
