import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Hero, Color } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent  {

  public isUpperCase: boolean = false;

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  public orderBy?: keyof Hero;

  changeOrder(value: keyof Hero):void{
    this.orderBy=value;
  }

  public heroes : Hero[]= [{
    name: 'Superman',
    canFly: true,
    color: Color.blue
  },
  {
    name: 'Batman',
    canFly: false,
    color: Color.black
  },
  {
    name: 'Flash',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Daredevil',
    canFly: false,
    color: Color.red
  },
  {
    name: 'Robin',
    canFly: false,
    color: Color.green
  },
  {
    name: 'Shazam',
    canFly: true,
    color: Color.red
  }

]

}




