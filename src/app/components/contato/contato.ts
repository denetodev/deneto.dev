import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [Reveal],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato { }