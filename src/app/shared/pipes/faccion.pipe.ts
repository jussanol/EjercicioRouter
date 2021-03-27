import { Pipe, PipeTransform } from '@angular/core';
import { RAZATYPE } from 'src/app/entities/razas/raza.model';

@Pipe({
  name: 'faccion'
})
export class FaccionPipe implements PipeTransform {

  transform(faccion: RAZATYPE): String {
    if (faccion == RAZATYPE.ALIANZA) {
      return "<img class='imagen' src='../../../assets/imgs/escudos/alliance.png'></img>";
    } else if (faccion == RAZATYPE.HORDA) {
      return "<img class='imagen' src='../../../assets/imgs/escudos/horde.png'></img>";
    } else {
      return "";
    }
  }

}
