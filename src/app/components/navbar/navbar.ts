import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuOpen = false;
  scrolled = false;
  hidden = false;
  scrollProgress = 0;

  private lastScrollY = 0;

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollY = window.scrollY;

    this.scrolled = window.scrollY > 50;
    this.hidden = currentScrollY > this.lastScrollY && currentScrollY > 100;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;

    this.lastScrollY = currentScrollY;
  }

  close() {
    this.menuOpen = false;
  }
}
