import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FaIconsModule } from '../fa-icons/fa-icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FaIconsModule,RouterLink],
  exports: [SidebarComponent],
})
export class SidebarModule {}
