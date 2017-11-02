import { ToNumberPipe } from './pipe.toNumber';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { TelefonePipe } from './pipe.telefone';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TelefonePipe,
        ToNumberPipe
    ],
    exports: [
        TelefonePipe,
        ToNumberPipe
    ]
})
export class MaskBrasilModule {
}