import { Component } from '@angular/core'

@Component({
  selector: 'app-component',
  template: `<h1>{{text}}</h1>`
})
export class AppComponent {
  public text = 'Angular-Parcel boilerplate'
}
