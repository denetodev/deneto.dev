import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-fora-do-codigo',
  imports: [RouterLink, Reveal],
  templateUrl: './fora-do-codigo.html',
  styleUrl: './fora-do-codigo.scss',
})
export class ForaDoCodigo {

}
