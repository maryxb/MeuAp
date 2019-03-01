import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaptacaoComponent } from './captacao/captacao.component';
import { SobreComponent } from './sobre/sobre.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

const routes: Routes = [
  { path: '', component: CaptacaoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'fale-conosco', component: FaleConoscoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
