import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'jogo-da-velha', loadChildren: './jogo-da-velha/jogo-da-velha.module#JogoDaVelhaPageModule' },
  { path: 'jogo2048', loadChildren: './jogo2048/jogo2048.module#Jogo2048PageModule' },
  { path: 'escolha-jogadores', loadChildren: './escolha-jogadores/escolha-jogadores.module#EscolhaJogadoresPageModule' },
  { path: 'jogo-da-velha-solo', loadChildren: './jogo-da-velha-solo/jogo-da-velha-solo.module#JogoDaVelhaSoloPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
