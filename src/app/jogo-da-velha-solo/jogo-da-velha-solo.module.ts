import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JogoDaVelhaSoloPage } from './jogo-da-velha-solo.page';

const routes: Routes = [
  {
    path: '',
    component: JogoDaVelhaSoloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JogoDaVelhaSoloPage]
})
export class JogoDaVelhaSoloPageModule {}
