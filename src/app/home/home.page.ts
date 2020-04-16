import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor() {}
  jogada = 0;
  jogadas = new Array([],[],[]);

  campo(linha, coluna){
    alert(linha + ""+ coluna + " = " + this.jogadas[linha][coluna]);
    var podeJogar = this.verificar(linha, coluna);
    if (podeJogar){
      this.jogada ++;
      var id = "col" + linha + ""+ coluna;
      if(this.jogada % 2 == 0){
        this.jogadas[linha][coluna] = 'O';
        var div = document.getElementById(id);
        div.innerText = "O"; div.style.color = "#ff914d";
      } else{
        this.jogadas[linha][coluna] = 'X';
        var div = document.getElementById(id);
        div.innerText = "X"; div.style.color = "#7ed957";
      }
    }
    alert(linha + ""+ coluna + " = " + this.jogadas[linha][coluna]);
    if(this.verificarGanhador()){
      alert("ganhou");
      this.reiniciar();
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
  }

}
