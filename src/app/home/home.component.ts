import { Component, OnInit } from '@angular/core';

// Se declaran los estilos y el hipertexto de componente para su plantilla, haciendo referencia a home.component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
