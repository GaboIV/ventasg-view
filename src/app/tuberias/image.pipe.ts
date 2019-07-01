import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMAGEN } from '../config/config';

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string): any {
    let url = URL_IMAGEN + '';

    if ( !img ) {
      return url + '/productos/xxx';
    }

    switch ( tipo ) {
      case 'producto':
         url += '/productos/' + img;
      break;

      default:
       console.log('Tipo de imagen no válido');
       url += '/productos/xxx';
    }

    return url;
  }

}
