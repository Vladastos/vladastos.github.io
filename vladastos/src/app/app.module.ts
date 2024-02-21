import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FaIconsModule } from './fa-icons/fa-icons.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderBarModule } from './header-bar/header-bar.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FaIconsModule,
    RouterLink,
    RouterLinkActive,
    HeaderBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
