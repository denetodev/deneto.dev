import { Component } from '@angular/core';
import { Footer } from "../components/footer/footer";
import { CommonModule } from '@angular/common';
import { Navbar } from "../components/navbar/navbar";
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
  ];

  emAndamento = [
    { titulo: 'Crime e Castigo', autor: 'Dostoiévski', progresso: 'faltam ~60 páginas' },
    { titulo: 'Matadouro Cinco', autor: 'Vonnegut', progresso: '65%' },
  ];

  naFila = [
    { titulo: 'O Cemitério de Praga', autor: 'Umberto Eco' },
    { titulo: 'Cem Anos de Solidão', autor: 'García Márquez' },
    { titulo: 'Foco', autor: 'Daniel Goleman' },
    { titulo: 'Não Contem com o Fim do Livro', autor: 'Eco e Carrière' },
    { titulo: '1984', autor: 'George Orwell (edição Darkside)' },
    { titulo: 'Édipo Rei + Antígona', autor: 'Sófocles' },
  ];
}
