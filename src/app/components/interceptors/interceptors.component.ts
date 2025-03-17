import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-interceptors',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css']
})
export class InterceptorsComponent implements OnInit {
  responseData: any;
  explanation: string = `
   Los interceptores en Angular son herramientas que permiten modificar peticiones y respuestas HTTP. Se usan para añadir lógica común como autenticación, registro de acciones o manejo de errores de forma centralizada. Funcionan interceptando las peticiones antes de enviarlas y las respuestas antes de que lleguen al componente, permitiendo modificar headers o el contenido.
  `;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(data => {
      this.responseData = data;
    });
  }
}
