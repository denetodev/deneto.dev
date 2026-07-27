import { Component, HostListener, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  titleLetters: { char: string; delay: number }[] = [];
  parallaxOffset = 0;

  ngOnInit() {
    const title = 'Sou o Neto.';
    this.titleLetters = title.split('').map((char, i) => ({
      char: char === ' ' ? '\u00A0' : char,
      delay: 400 + i * 80,
    }));
  }

  @HostListener('window:scroll')
  onScroll() {
    this.parallaxOffset = window.scrollY * 0.3;
  }
}