import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}


  n1=0;
  n2=0;
  res=0;

  somar(){
    this.res=this.n1+this.n2;
  }

  subtrair(){
    this.res=this.n1-this.n2;
  }

  multiplicar(){
    this.res=this.n1*this.n2;
  }

  dividir(){

    if(this.n2!=0){
      this.res=this.n1/this.n2;
    }

    else{
      this.res=0;
}}

  pes=0;
  km=0;

  converter() {
    this.km=this.pes*0.0003048;
  }

  idade=0;
  mensagem="";

  clas(){
    if(this.idade<=0){
      this.mensagem="Valor inválido: insira uma idade acima de 0.";
    } else if(this.idade<=12){
      this.mensagem="Você é uma criança.";
    }else if(this.idade<=17){
      this.mensagem="Você é um adolescente.";
    }else if(this.idade<=59){
      this.mensagem="Você é um adulto.";
    }else {
      this.mensagem="Você é um idoso.";
    }
  }
}

