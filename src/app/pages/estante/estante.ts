import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { CommonModule } from '@angular/common';
import { Navbar } from "../../components/navbar/navbar";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-estante',
  imports: [Footer, CommonModule, Navbar, RouterLink],
  templateUrl: './estante.html',
  styleUrl: './estante.scss',
})
export class Estante {
  lidos = [
    { titulo: 'O Homem Duplicado', autor: 'José Saramago' },
    { titulo: 'Laranja Mecânica', autor: 'Anthony Burgess' },
    { titulo: 'A Metamorfose', autor: 'Franz Kafka' },
    { titulo: 'Nação Dopamina', autor: 'Dra. Anna Lembke' },
    { titulo: 'O Alienista', autor: 'Machado de Assis' },
    { titulo: 'Grupo de Apoio a Serial Killers', autor: 'Saratoga Schaefer' },
    { titulo: 'A Máquina do Tempo', autor: 'H.G. Wells' },
    { titulo: 'Noites Brancas', autor: 'Dostoiévski' },
    { titulo: 'Crime e Castigo', autor: 'Dostoiévski' },
    { titulo: 'Matadouro Cinco', autor: 'Vonnegut' },
  ];

  emAndamento = [
    { titulo: 'Eu, Robô', autor: 'Asimov', progresso: '~75%' },
  ];

  naFila = [
    { titulo: 'A Morte de Ivan Ilyich', autor: 'Tolstói' },
    { titulo: 'Sobre a Brevidade da Vida', autor: 'Sêneca' },
    { titulo: 'O Cemitério de Praga', autor: 'Umberto Eco' },
    { titulo: 'Cem Anos de Solidão', autor: 'García Márquez' },
    { titulo: 'Foco', autor: 'Daniel Goleman' },
    { titulo: 'Não Contem com o Fim do Livro', autor: 'Eco e Carrière' },
    { titulo: 'Édipo Rei + Antígona', autor: 'Sófocles' },
    { titulo: 'Se os Gatos Desaparecessem do Mundo', autor: 'Kawamura' },
  ];

  get total() { return this.lidos.length + this.emAndamento.length + this.naFila.length; }
  get totalLidos() { return this.lidos.length; }
  get totalAndamento() { return this.emAndamento.length; }
  get totalFila() { return this.naFila.length }

}
