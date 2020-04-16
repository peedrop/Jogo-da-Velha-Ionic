import { Component, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-da-velha-solo',
  templateUrl: './jogo-da-velha-solo.page.html',
  styleUrls: ['./jogo-da-velha-solo.page.scss'],
})
export class JogoDaVelhaSoloPage implements AfterViewInit{

  constructor(private storage: Storage,public router: Router) {}

  ngAfterViewInit() {
    //this.preencherNomes();
  }

  jogador1 = "Jogador";
  jogador2 = "Máquina";
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
        var id = "col" + linha + ""+ coluna; 
        this.jogada ++;
        this.jogadas[linha][coluna] = 'X';
        var div = document.getElementById(id);
        div.innerText = "X"; 
        div.style.color = "#7ed957";
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
        } else{
        this.maquina();  
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
 
    }
    //alert(linha + ""+ coluna + " = " + this.jogadas[linha][coluna]);
    //var inicio = new Date().getTime();
    //fica tentando por 500 milesegundos
    //while(new Date().getTime() < inicio + 1000){}
  
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
  verificarPossibilidadeLinha(){
    for(var l = 0; l < 3; l++){
      if(!this.verificar(l, 0)){
        if(this.jogadas[l][0] == this.jogadas[l][1] || this.jogadas[l][0] == this.jogadas[l][2]){
          return l;
        }
      }
      if(!this.verificar(l, 1)){
        if(this.jogadas[l][1] == this.jogadas[l][2]){
          return l;
        }
      }
    }
    return -1;
  }
  verificarPossibilidadeColuna(){
    for(var c = 0; c < 3; c++){
      if(!this.verificar(0, c)){
        if(this.jogadas[0][c] == this.jogadas[1][c] || this.jogadas[0][c] == this.jogadas[2][c]){
          return c;
        }
      }
      if(!this.verificar(1, c)){
        if(this.jogadas[1][c] == this.jogadas[2][c]){
          return c;
        }
      }
    }
    return -1;
  }
  verificarPossibilidadeDiagonal(){
    /*
    if(this.jogadas[0][0] == this.jogadas[1][1] || this.jogadas[0][0] == this.jogadas[2][2] 
      || this.jogadas[1][1] == this.jogadas[0][0]){
        if(this.jogadas[0][0] != null || this.jogadas[1][1] != null || this.jogadas[2][2] != null ){
          return true;
        }
        return false;
    }
    
    if(this.jogadas[0][2] == this.jogadas[1][1] && this.jogadas[0][2] == this.jogadas[2][0]
      && this.jogadas[0][2] != null){
      return true;
    }*/
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
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
    this.mudarCss();
    
  }
  maquina(){
    var possibilidadeLinha = this.verificarPossibilidadeLinha();
    var possibilidadeColuna = this.verificarPossibilidadeColuna();
    var controle = 0;

    if (possibilidadeLinha >= 0){
      for(var c = 0; c < 3; c++){


        if(this.verificar(possibilidadeLinha, c)){
          this.jogada ++;
          var id = "col" + possibilidadeLinha + ""+ c;
          this.jogadas[possibilidadeLinha][c] = 'O';
          var div = document.getElementById(id);
          div.innerText = "O"; 
          div.style.color = "#ff914d";
          controle = 1;
        }


      }
    }

    if (possibilidadeColuna >= 0){
      for(var l = 0; l < 3; l++){


        if(this.verificar(l, possibilidadeColuna)){
          this.jogada ++;
          var id = "col" + l + ""+ possibilidadeColuna;
          this.jogadas[l][possibilidadeColuna] = 'O';
          var div = document.getElementById(id);
          div.innerText = "O"; 
          div.style.color = "#ff914d";
          controle = 1;
        }


      }
    }
    
    if(controle == 0){
      this.jogada ++;
      var jaJogou = false;
      while(jaJogou == false){
        var linha = this.getRandomInt(0, 3);
        var coluna = this.getRandomInt(0, 3);
        if(this.jogadas[linha][coluna] == null){
          jaJogou = true;
          var id = "col" + linha + ""+ coluna;
          this.jogadas[linha][coluna] = 'O';
          var div = document.getElementById(id);
          div.innerText = "O"; 
          div.style.color = "#ff914d";
        }
      }
    }
  }
  mudarCss(){
    this.display='block';
    this.proxJog='block';
    this.areaVencedor='none';
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
