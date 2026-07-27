import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [Reveal],
  templateUrl: './conteudo.html',
  styleUrl: './conteudo.scss',
})
export class Conteudo { }