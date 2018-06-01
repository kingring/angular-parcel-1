import { Component } from '@angular/core'
const fs = require('fs')

@Component({
  selector: 'app-home-component',
  template: `${fs.readFileSync(__dirname + '/home.component.html')}`,
  styles: [`${fs.readFileSync(__dirname + '/home.component.css')}`]
})
export class HomeComponent {}
