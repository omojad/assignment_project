import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../header/header'
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, Header, Sidebar],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss']
})
export class Layout {
@ViewChild(Sidebar) sidebar!: Sidebar;

toggleSidebar() {
  if (window.innerWidth <= 768) {
    this.sidebar.openSidebar();
  } else {
    this.sidebar.toggleSidebarCollapse();
  }
}
}