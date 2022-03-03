import { Component, OnInit } from '@angular/core';

// Se declaran los estilos y el hipertexto de componente para su plantilla, haciendo referencia a app.component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
