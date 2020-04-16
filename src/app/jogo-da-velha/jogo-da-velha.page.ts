import { Component, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.page.html',
  styleUrls: ['./jogo-da-velha.page.scss'],
})
export class JogoDaVelhaPage implements AfterViewInit{

  constructor(private storage: Storage,public router: Router) {}

  ngAfterViewInit() {
    this.preencherNomes();
  }

  jogador1 = "Jogador 1";
  jogador2 = "Jogador 2";
  jogada = 0;
  jogadas = new Array([],[],[]);
  display = 'none';
  areaVencedor = 'none';
  proxJog = 'none';
  vencedor = '';

  campo(linha, coluna){
    //alert(linha + ""+ coluna + " = " + this.jogadas[linha][coluna]);
    var podeJogar = this.verificar(linha, coluna);
    if (podeJogar){
      
      this.jogada ++;
      var id = "col" + linha + ""+ coluna;
      if(this.jogada % 2 == 0){
        this.jogadas[linha][coluna] = 'O';
        var div = document.getElementById(id);
        div.innerText = "O"; 
        div.style.color = "#ff914d";
      } else{
        this.jogadas[linha][coluna] = 'X';
        var div = document.getElementById(id);
        div.innerText = "X"; 
        div.style.color = "#7ed957";
      }
    }
    //alert(linha + ""+ coluna + " = " + this.jogadas[linha][coluna]);
    //var inicio = new Date().getTime();
    //fica tentando por 500 milesegundos
    //while(new Date().getTime() < inicio + 1000){}
    if(this.verificarGanhador()){
      if(this.jogada % 2 == 0){
        //alert(this.jogador1 + " ganhou");
        this.vencedor = this.jogador2;
        this.areaVencedor='block';
        this.proxJog='none';
      }else{
        this.vencedor = this.jogador1;
        this.areaVencedor='block';
        this.proxJog='none';
      }
      //this.reiniciar();
      this.preencherVetor();
    }
  }
  verificar(linha, coluna){
    if((this.jogadas[linha][coluna] == 'X') || (this.jogadas[linha][coluna] == 'O')){
      return false;
    }
    return true;
  }

  verificarGanhador(){
    for(var l = 0; l < 3; l++){
      for(var c = 0; c < 3; c++){
        if(!this.verificar(l, c)){

          if(this.jogadas[l][0] == this.jogadas[l][1] &&
            this.jogadas[l][0] == this.jogadas[l][2]){
            return true;
          }
          if(this.jogadas[0][c] == this.jogadas[1][c] &&
            this.jogadas[0][c] == this.jogadas[2][c]){
            return true;
          }          
        } 
      }
    }

    if(this.jogadas[0][0] == this.jogadas[1][1] && this.jogadas[0][0] == this.jogadas[2][2] 
      && this.jogadas[0][0] != null){
      return true;
    }
    if(this.jogadas[0][2] == this.jogadas[1][1] && this.jogadas[0][2] == this.jogadas[2][0]
      && this.jogadas[0][2] != null){
      return true;
    }


    return false;
  }

  reiniciar(){
    this.jogada = 0;
    this.jogadas = new Array([],[],[]);
    var div = document.getElementById("col00");
    div.innerText = "";
    var div = document.getElementById("col01");
    div.innerText = "";
    var div = document.getElementById("col02");
    div.innerText = "";
    var div = document.getElementById("col10");
    div.innerText = "";
    var div = document.getElementById("col11");
    div.innerText = "";
    var div = document.getElementById("col12");
    div.innerText = "";
    var div = document.getElementById("col20");
    div.innerText = "";
    var div = document.getElementById("col21");
    div.innerText = "";
    var div = document.getElementById("col22");
    div.innerText = "";

    this.preencherNomes();
    this.mudarCss();
    
  }
  mudarCss(){
    this.display='block';
    this.proxJog='block';
    this.areaVencedor='none';
  }
  preencherNomes(){
    this.storage.get('jogador1').then((jogador1) => {
      this.jogador1 = jogador1;
    });
    this.storage.get('jogador2').then((jogador2) => {
      this.jogador2 = jogador2;
    });
  }
  proximoJogador(){
    if(this.jogada % 2 == 0){
      return this.jogador1;
    }else{
      return this.jogador2;
    }
  }
  preencherVetor(){
    var btn = document.getElementById("btnJogarDnv");
    btn.innerText = "Reiniciar Partida"; 
    for(var l = 0; l < 3; l++){
      for(var c = 0; c < 3; c++){
        this.jogadas[l][c] = 'O';
      }
    }
  }
  public set(key,value){
    return this.storage.set(`${ key }`,value);
  }
  public async get(key){
    return await this.storage.get(`${ key }`);
  }
  public async remove(key){
    return await this.storage.remove(`${ key }`);
  }
  public clear() {
    this.storage.clear().then(() => {
      console.log('all keys cleared');
    });
  }

}
