import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar.component';
import { FaIconsModule } from '../fa-icons/fa-icons.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderBarComponent],
  imports: [CommonModule, FaIconsModule, RouterLink],
  exports: [HeaderBarComponent],
})
export class HeaderBarModule {}
