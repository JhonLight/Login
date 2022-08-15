import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = ''
  senha: string = ''
  error: string = 'Ops, usuário ou senha inválidos.'
  error2: string = ' Tente novamente!'
  mostraErro: boolean = false

  constructor( private router: Router ) {  }

  ngOnInit(): void {
  }

  valida(): void{
    if(this.user.trim() == 'jhony' && this.senha.trim() == '123'){
      this.router.navigate(['home'])

    }else{
      this.user = ''
      this.senha = ''
      this.mostraErro = true
    }

  }

  esconde():void{
    this.mostraErro = false
  }

  cadastrar(): void{
    this.router.navigate(['cadastro'])
  }

}
