import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha-jogadores',
  templateUrl: './escolha-jogadores.page.html',
  styleUrls: ['./escolha-jogadores.page.scss'],
})
export class EscolhaJogadoresPage implements OnInit {

  constructor(private storage: Storage,public router: Router) { }

  ngOnInit() {
  }

  salvar(){
    var jogador1 = ((document.getElementById("jogador1") as HTMLInputElement).value);
    var jogador2 = ((document.getElementById("jogador2") as HTMLInputElement).value);
    //alert(jogador1);
    //alert(jogador2);
    if (jogador1 == ''){
      jogador1 = "Jogador 1"
    }
    if (jogador2 == ''){
      jogador2 = "Jogador 2"
    }

    this.set("jogador1", jogador1);
    this.set("jogador2", jogador2);
    //this.set("atualizar", 'sim');
    this.router.navigate(['jogo-da-velha']);
  }
  emProducao(){
    alert("Esta funcionalidade ainda não foi implementada!");
  }
  pegar(){
    this.storage.get('jogador1').then((jogador1) => {
      var jogador1 = jogador1;
      alert(jogador1);
    });
    this.storage.get('jogador2').then((jogador2) => {
      var jogador2 = jogador2;
      alert(jogador2);
    });
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
