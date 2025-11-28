import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
// import { ButtonModule } from 'primeng/button';
// import { AuthService } from '../../../core/services/auth.service';
// import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { LogoutConfirmn } from './logout-confirmn/logout-confirmn';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss'],
  providers:[],
})
export class Sidebar {
  sidebarCollapsed = false;
  sidebarVisible = false;
  isMobile = false;

  constructor(private router: Router) {
    this.checkScreenSize();
  }

@HostListener('window:resize', ['$event'])

onResize(event: any) {
  this.checkScreenSize();
}

hideSidebar() {
  this.sidebarVisible = false;
}

openSidebar() {
  this.sidebarVisible = true;
}
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.sidebarVisible = false;
    }
  }

  toggleSidebarCollapse() {
    if (!this.isMobile) {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  }

  toggleMobileSidebar() {
    if (this.isMobile) {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }

  closeMobileSidebar() {
    if (this.isMobile) {
      this.sidebarVisible = false;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.closeMobileSidebar();
  }

  logout() {
    // Add your logout logic here
    console.log('Logout clicked');
    this.closeMobileSidebar();
    // Example: this.authService.logout();
    // this.router.navigate(['/login']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
