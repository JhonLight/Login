import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  senha: string = ''
  confSenha: string = ''
  senhaIgual: boolean = false
  erro: string = 'X Senhas não conferem'
  erroMenor: string = 'X Senha menor que seis caracteres'


  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  validaSenhaIgual(): void {
    if (this.senha == this.confSenha ) {
      this.router.navigate(['home'])

    } else {

      this.senha = ''
      this.confSenha = ''
      this.senhaIgual = true
    }
  }

  /* validaSenhaTamanho (): void{
    if (this.senha.length > 5 && this.confSenha.length > 5) {

    } else {
      this.senhaIgual = true
    }
  } */

  esconde():void{
    this.senhaIgual = false
  }


  voltar(){
    this.router.navigate(['login'])
  }
}
