import { Component } from '@angular/core';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name:string ="Javi";
  public gender: 'male' | 'female' ="male";
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  changeClient():void{
    this.name = 'Melissa';
    this.gender= 'female';
  }

  clientLeft(){
    this.clients.pop();
  }

//i18n Plural

public clients : string[] =['Maria', 'Javi', 'Pedro', 'Nina','Laura', 'Vera', 'Edurne', 'Oscar'];
public clientsMap = {
  '=0': 'no tenemos ningun cliente esperando.',
  '=1':'tenemos 1 cliente esperando.',
  '=2': 'tenemos # personas esperando',
  'other' : 'tenemos # clientes esperando.'
}

}
