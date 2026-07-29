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
  headlineWords: { char: string; delay: number }[][] = [];

  ngOnInit() {
    const headline = 'Automação de marketing em escala. Agentes de IA pra quem trabalha sozinho.';
    let charIndex = 0;

    this.headlineWords = headline.split(' ').map((word) => {
      const letters = word.split('').map((char) => ({
        char,
        delay: 400 + charIndex++ * 55,
      }));
      charIndex++;
      return letters;
    })
  }
}