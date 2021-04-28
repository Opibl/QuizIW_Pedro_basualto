import { Component, OnInit } from '@angular/core';
import{Datos,ListaDatos1,ListaDatos2,ListaDatos3} from '../../interfaces/datos'
@Component({
  selector: 'app-figura2',
  templateUrl: './figura2.component.html',
  styleUrls: ['./figura2.component.scss']
})
export class Figura2Component implements OnInit {

  Lista1:Array<Datos> = ListaDatos1;
  Lista2:Array<Datos> = ListaDatos2;
  Lista3:Array<Datos> = ListaDatos3;

  constructor() { }

  ngOnInit(): void {
  }

  borrar(){
    this.Lista1.pop();
  }
}
