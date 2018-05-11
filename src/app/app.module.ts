import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core'

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
