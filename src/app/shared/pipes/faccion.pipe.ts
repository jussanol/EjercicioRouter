import { Pipe, PipeTransform } from '@angular/core';
import { RAZATYPE } from 'src/app/entities/razas/raza.model';

@Pipe({
  name: 'faccion'
})
export class FaccionPipe implements PipeTransform {

  transform(faccion: boolean): String {
    if (faccion) {
      return "<img class='imagen' src='../../../assets/imgs/escudos/alliance.png'></img>";
    } else {
      return "<img class='imagen' src='../../../assets/imgs/escudos/horde.png'></img>";
    }
  }

}
