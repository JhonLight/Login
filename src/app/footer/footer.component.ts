import { Router } from '@angular/router';
import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  decrecente: number = 600

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.Contador()
  }

  voltaLogin(): void{
    this.router.navigate(['login'])
  }

  Contador(): void{
    const teste = new Promise((resolve, reject) => {
      if (this.decrecente > 0){
        setTimeout(() => {
          this.decrecente = this.decrecente - 1
          this.Contador()
        }, 1000);
      }else{
        this.router.navigate(['login'])
      }
    })
  }

}
