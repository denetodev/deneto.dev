import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [Reveal],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre { }