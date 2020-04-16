import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo2048',
  templateUrl: './jogo2048.page.html',
  styleUrls: ['./jogo2048.page.scss'],
})
export class Jogo2048Page implements OnInit {

  canvas;
  ctx;
  tamanho = 4;
  largura;
  cells = [];
  fontSize;
  perder = false;

  constructor() { }

  ngOnInit() {
  }

  comecar(){
    var canvas = <HTMLCanvasElement> document.getElementById("canvas"); 
    //var canvas = document.getElementById('canvas');
    //canvas.width = 450;
    //canvas.height = 450;
    var ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.tamanho = 4;
    this.largura = canvas.width / this.tamanho - 6;
    this.createCells();
    this.desenhar_todas_cedulas();
    this.unircedulas();
	  this.unircedulas();	
  }
  

  createCells() {
      var i, j;
      for (i = 0; i < this.tamanho; i++) {
          this.cells[i] = [];
          for (j = 0; j < this.tamanho; j++) {
            this.cells[i][j] = new Cell(i, j, this.largura);
          }
      }
  }
  desenhar_todas_cedulas() {
    var i, j;
    for (i = 0; i < this.tamanho; i++) {
        for (j = 0; j < this.tamanho; j++) {
          this.desenhar_cedula(this.cells[i][j]);
        }
    }
  }

  desenhar_cedula(cell) {
    this.ctx.arc(cell.x, cell.y, this.largura, this.largura);
    switch (cell.value) {
        case 0:
            this.ctx.fillStyle = '#A9A9A9';
            break;
        case 2:
            this.ctx.fillStyle = '#D2691E';
            break;
        case 4:
            this.ctx.fillStyle = '#FF7F50';
            break;
        case 8:
            this.ctx.fillStyle = '#ffbf00';
            break;
        case 16:
            this.ctx.fillStyle = '#bfff00';
            break;
        case 32:
            this.ctx.fillStyle = '#40ff00';
            break;
        case 64:
            this.ctx.fillStyle = '#00bfff';
            break;
        case 128:
            this.ctx.fillStyle = '#FF7F50';
            break;
        case 256:
            this.ctx.fillStyle = '#0040ff';
            break;
        case 512:
            this.ctx.fillStyle = '#ff0080';
            break;
        case 1024:
            this.ctx.fillStyle = '#D2691E';
            break;
        case 2048:
            this.ctx.fillStyle = '#FF7F50';
            break;
        case 4096:
            this.ctx.fillStyle = '#ffbf00';
            break;
        default:
            this.ctx.fillStyle = '#ff0080';
    }
    this.ctx.fill();
    if (cell.value) {
        this.fontSize = this.largura / 2;
        this.ctx.font = this.fontSize + 'px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(cell.value, cell.x + this.largura / 2, cell.y + this.largura / 2 + this.largura / 7);
    }
  }
  unircedulas() {
    var countFree = 0;
    var i, j;
    for (i = 0; i < this.tamanho; i++) {
        for (j = 0; j < this.tamanho; j++) {
            if (!this.cells[i][j].value) {
                countFree++;
            }
        }
    }
    if (!countFree) {
        //gameover();
        return;
    }
    while (true) {
        var linha = Math.floor(Math.random() * this.tamanho);
        var coluna = Math.floor(Math.random() * this.tamanho);
        if (!this.cells[linha][coluna].value) {
            this.cells[linha][coluna].value = 2 * Math.ceil(Math.random() * 2);
            this.desenhar_todas_cedulas();
            return;
        }
    }
}

}
class Cell{
  constructor(linha, coluna, largura) {
    var x = coluna * largura + 5 * (coluna + 1);
    var y = linha * largura + 5 * (linha + 1);
   }
}

