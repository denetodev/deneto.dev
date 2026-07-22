import { Component } from '@angular/core';
import { Navbar } from "../components/navbar/navbar";
import { Hero } from "../components/hero/hero";
import { Agora } from "../components/agora/agora";
import { Trabalho } from "../components/trabalho/trabalho";
import { Sobre } from "../components/sobre/sobre";
import { ForaDoCodigo } from "../components/fora-do-codigo/fora-do-codigo";
import { Conteudo } from "../components/conteudo/conteudo";
import { Contato } from "../components/contato/contato";
import { Footer } from "../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, Agora, Trabalho, Sobre, ForaDoCodigo, Conteudo, Contato, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
