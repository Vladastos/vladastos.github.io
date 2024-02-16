import { Component } from '@angular/core';

import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public faBars = faBars;
  public faClose = faClose;
}
