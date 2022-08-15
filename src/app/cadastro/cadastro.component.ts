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

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  validaSenha(): void {
    if (this.senha == '123456' && this.confSenha == '123456') {
      this.router.navigate(['home'])

    } else {

      this.senha = ''
      this.confSenha = ''
      this.senhaIgual = true
    }
  }

  esconde():void{
    this.senhaIgual = false
  }


  voltar(){
    this.router.navigate(['login'])
  }
}
