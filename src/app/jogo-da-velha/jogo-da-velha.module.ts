import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JogoDaVelhaPage } from './jogo-da-velha.page';

const routes: Routes = [
  {
    path: '',
    component: JogoDaVelhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JogoDaVelhaPage]
})
export class JogoDaVelhaPageModule {}
