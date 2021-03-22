import { Injectable } from '@angular/core';
import { Raza, RAZATYPE } from './raza.model';

@Injectable({
  providedIn: 'root'
})
export class RazasService {

  private razas: Raza[] = [];

  constructor() {
    this.pullAllRazas();
  }

  private pullAllRazas() {
    const raza01: Raza = new Raza(1, 'DRAENEIS',
      'Los draenei son seguidores de los Naaru y de la Luz Sagrada. Provienen del lejano mundo de Argus, del cual debieron escapar cuando Sargeras intentó corromperlos.',
      '../../../assets/imgs/razas/alianza/draenei.png', RAZATYPE.ALIANZA);
    this.razas.push(raza01);
    const raza02: Raza = new Raza(2, 'ENANOS',
      'Los enanos son una raza robusta proveniente de Khaz Modan, en los Reinos del Este. Se dice que descienden de los Titanes.',
      '../../../../assets/imgs/razas/alianza/enano.png', RAZATYPE.ALIANZA);
    this.razas.push(raza02);
    const raza03: Raza = new Raza(3, 'ELFOS',
      'Los elfos de sangre son una raza orgullosa y arrogante que se unió a la Horda en la expansión The Burning Crusade.',
      '../../../../assets/imgs/razas/alianza/elfo.png', RAZATYPE.ALIANZA);
    this.razas.push(raza03);
    const raza04: Raza = new Raza(4, 'HUMANOS',
      'Los humanos son la raza más joven y numerosa de Azeroth. Se han convertido en los líderes de facto de la Alianza gracias a su ambiciosa juventud y capacidad de adaptación.',
      '../../../../assets/imgs/razas/alianza/humano.png', RAZATYPE.ALIANZA);
    this.razas.push(raza04);
    const raza05: Raza = new Raza(5, 'ELFOS OSCUROS',
      'Los elfos de la noche son una raza antigua y misteriosa. Vivieron en Kalimdor durante miles de años sin que nadie los molestara hasta que, en eventos anteriores a los de World of Warcraft, sacrificaron el árbol del mundo para detener a la Legión Ardiente.',
      '../../../../assets/imgs/razas/horda/elfo-oscuro.png', RAZATYPE.HORDA);
    this.razas.push(raza05);
    const raza06: Raza = new Raza(6, 'OGROS',
      'Los ogros son grandes y brutos humanoides originarios de Draenor, ahora Terrallende y una de las últimas razas de gigantes de Draenor.',
      '../../../../assets/imgs/razas/horda/ogro.png', RAZATYPE.HORDA);
    this.razas.push(raza06);
    const raza07: Raza = new Raza(7, 'sanlayn',
      'Los Sanlayn son una facción de Caídos Oscuros, liderados por la vampírica princesa elfa de sangre Lanathel cuya influencia es bastante significativa entre el Azot.',
      '../../../../assets/imgs/razas/horda/sanlayn.png', RAZATYPE.HORDA);
    this.razas.push(raza07);
    const raza08: Raza = new Raza(8, 'tauren',
      'Los tauren, una raza con profundas raíces chamánicas, han vivido por mucho tiempo en Kalimdor. Aman a la naturaleza y la gran mayoría de ellos rinde culto a una deidad conocida como la Madre Tierra.',
      '../../../../assets/imgs/razas/horda/tauren.png', RAZATYPE.HORDA);
    this.razas.push(raza08);
  }

  public getRazas(): Raza[] {
    return this.razas;
  }

  public getRaza(idRaza: number): Raza | undefined {
    for (let i = 0; i < this.razas.length; i++) {
      if (this.razas[i].id == idRaza) {
        return this.razas[i];
      }
    }
    return undefined;
  }
}
