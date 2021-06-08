import { AuthService } from './../service/auth.service';
import { TemaService } from './../service/tema.service';
import { PostagemService } from './../service/postagem.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { Tema } from '../model/Tema';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-incio',
  templateUrl: './incio.component.html',
  styleUrls: ['./incio.component.css']
})
export class IncioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private auth: AuthService

  ) { }

  ngOnInit(): void{
    if(environment.token ==""){
      alert("sua seção expirou, faça o login novamente.")
      this.router.navigate(["/entrar"])
    }
    this.getAllTemas()
    console.log(this.listaTemas)
    this.getAllPostagens()

  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }



  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUser(this.idUser).subscribe((resp: User)=>{
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema
    this.user.id = this.idUser
    this.postagem.usuario = this.user
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
}


  findByIdTema(){
     this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
       this.tema = resp
     })
  }
}
