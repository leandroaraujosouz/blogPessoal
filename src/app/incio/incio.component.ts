import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void{
    if(environment.token ==""){
      alert("sua seção expirou, faça o login novamente.")
      this.router.navigate(["/entrar"])
    }
  }
}
