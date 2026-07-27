import { Component } from '@angular/core';
import { WhatsappMockup } from '../whatsapp-mockup/whatsapp-mockup';

@Component({
  selector: 'app-trabalho',
  imports: [ WhatsappMockup ],
  templateUrl: './trabalho.html',
  styleUrl: './trabalho.scss',
})
export class Trabalho {
  isaMessages = [
    { from: 'client' as const, text: 'Oi, vi o trabalho da Clara no Instagram. Queria fazer uma tatuagem no antebraço, estilo fineline.', time: '14:02' },
    { from: 'agent' as const, text: 'Oi! Que bom que se interessou pelo trabalho da Clara. Fineline no antebraço é um dos estilos que ela mais faz. Você já tem referência de imagem ou quer que ela crie algo?', time: '14:02' },
    { from: 'client' as const, text: 'Tenho umas referências sim, posso mandar aqui?', time: '14:03' },
    { from: 'agent' as const, text: 'Pode mandar. Vou precisar também do tamanho aproximado (em cm) e se é a primeira tatuagem. Com isso a Clara consegue montar o orçamento.', time: '14:03' },
    { from: 'client' as const, text: 'Uns 12cm, e já tenho outras tatuagens.', time: '14:04' },
    { from: 'agent' as const, text: 'Anotado. Vou passar tudo pra Clara e ela te retorna com o orçamento e a disponibilidade de agenda. Obrigada pelo contato!', time: '14:04' },
  ];

  irisMessages = [
    { from: 'client' as const, text: 'Boa tarde, estou procurando uma fotógrafa pra um ensaio de casal. Vi o portfólio da Gabriella e gostei muito.', time: '10:15' },
    { from: 'agent' as const, text: 'Boa tarde! Fico feliz que tenha gostado do trabalho da Gabriella. Pra montar uma proposta, preciso saber: vocês têm preferência de locação (estúdio ou externo)?', time: '10:15' },
    { from: 'client' as const, text: 'Externo, de preferência num parque ou lugar com verde.', time: '10:16' },
    { from: 'agent' as const, text: 'Ótima escolha. Brasília tem ótimas locações pra isso. Qual seria a melhor semana pra vocês? Vou verificar a agenda da Gabriella.', time: '10:16' },
    { from: 'client' as const, text: 'Qualquer sábado de agosto funciona.', time: '10:17' },
    { from: 'agent' as const, text: 'Perfeito. Vou repassar pra Gabriella com as informações e ela te envia a proposta com valores e datas disponíveis. Obrigada!', time: '10:17' },
  ];
}
