import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FaIconsModule } from '../fa-icons/fa-icons.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, FaIconsModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
