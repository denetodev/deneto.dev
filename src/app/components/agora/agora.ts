import { Component } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-agora',
  standalone: true,
  imports: [Reveal],
  templateUrl: './agora.html',
  styleUrl: './agora.scss',
})
export class Agora { }