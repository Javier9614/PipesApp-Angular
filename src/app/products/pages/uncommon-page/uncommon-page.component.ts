import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

//KeyValue Pipe
public person={
  name: 'Javi',
  age: 28,
  address: 'Zaragoza, España'
}

// Async Pipe
public myObservableTimer:Observable<number> = interval(2000).pipe(
  tap(value => console.log('tap',value))
);

public promiseValue:Promise<string> = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('Tenemos data en la promesa');
    console.log('Tenemos data en la promesa');

  },3500)
})

}

