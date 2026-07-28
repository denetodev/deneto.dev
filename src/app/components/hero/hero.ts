import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  headlineLetters: { char: string; delay: number }[] = [];

  ngOnInit() {
    const headline = 'Banco de dia. Agentes de IA à noite.';
    this.headlineLetters = headline.split('').map((char, i) => ({
      char: char === ' ' ? '\u00A0' : char,
      delay: 400 + i * 55,
    }));
  }
}