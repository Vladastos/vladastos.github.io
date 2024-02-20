import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FaIconsModule } from './fa-icons/fa-icons.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule, FaIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
