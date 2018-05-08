import { Component } from '@angular/core'

@Component({
  selector: 'app-dashboard-component',
  template: `
    <h1>Dashboard</h1>
    <a [routerLink]="['']">Home</a>
  `
})
export class DashboardComponent {}
