import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] = [];

  ngOnInit()  {
    this.menuItems = [
      {
        label: "Pipes de Angular",
        icon: "pi pi-desktop",
        items: [
          {
            label:"Textos y fechas",
            route:"/",
            icon: "pi pi-align-left"
          },
          {
            label:"Números",
            route:"/numbers",
            icon: "pi pi-dollar"
          },
          {
            label:"No comunes",
            route:"/uncommon",
            icon: "pi pi-globe"
          },
        ]
      },
      {
        label:"Pipes personalizados",
        icon: "pi pi-cog",
        items:[
          {
            label:"Custom Pipes",
            route: "/custom",
            icon: "pi pi-microchip-ai",
          }
        ]
      }


    ]


 }
}
