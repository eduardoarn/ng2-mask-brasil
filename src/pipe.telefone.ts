import { Pipe, PipeTransform } from '@angular/core';
import * as libphonenumber from 'google-libphonenumber';


@Pipe({ name: 'telefone' })
export class TelefonePipe implements PipeTransform {
    transform(value: string, tipo: string = 'nacional', country: string = 'BR'): string {
        let PNF = libphonenumber.PhoneNumberFormat;

        // Get an instance of `PhoneNumberUtil`.
        let phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

        let tipoSelecionado;

        switch (tipo) {
            case 'nacional':
                tipoSelecionado = PNF.NATIONAL;
                break;
            case 'internacional':
                tipoSelecionado = PNF.INTERNATIONAL;
                break;
            case 'E164':
                tipoSelecionado = PNF.E164;
                break;
            case 'RFC3966':
                tipoSelecionado = PNF.RFC3966;
                break;
            default:
                tipoSelecionado = PNF.NATIONAL;
                break;
        }

        // Format the number.
        let parsedPhoneObj = phoneUtil.parse(value, country);
        return phoneUtil.format(parsedPhoneObj, tipoSelecionado);

    }
}
