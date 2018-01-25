# ng2-mask-brasil

Projeto em desenvolvimento de mascaras e pipes para reutilização nos projetos para a formatação de strings no Angular 2+.

## Implementado

Pipes: telefone

## Como usar

1 - Instale o pacote: `npm i --save ng2-brasil`

```
npm i --save ng2-brasil
```

2 - Adicione o pacote no app.module.ts do seu projeto.

```
import { MaskBrasilModule } from 'ng2-brasil/dist';

@NgModule({
  declarations: [],
  imports: [
    MaskBrasilModule
  ],
  providers: [],
})
```
3 - Adicione o pipe nos locais onde a string deverá ser formatada. Ex.: 00987654321

```
{{ string | telefone }} // (00) 98765-4321 - Padrão
{{ string | telefone: 'NATIONAL' }} // (00) 98765-4321
{{ string | telefone: 'E164' }}<br> // +5500987654321
{{ string | telefone: 'INTERNATIONAL' }}<br> // (00) 98765-4321
{{ string | telefone: 'RFC3966' }} tel:+55-00-98765-4321
```

Por padrão a biblioteca usa o padrão brasileiro para formação para telefones.


