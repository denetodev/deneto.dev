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
  scrollProgress = 0;


  @HostListener('window:scroll')
  onScroll() {
    this.scrolled = window.scrollY > 50;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
  }

  close() {
    this.menuOpen = false;
  }
}
