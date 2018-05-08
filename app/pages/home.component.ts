import { Component } from '@angular/core'

@Component({
  selector: 'app-home-component',
  template: `
    <h1>Home</h1>
    <a [routerLink]="['dashboard']">Dashboard</a>
  `
})
export class HomeComponent {}
