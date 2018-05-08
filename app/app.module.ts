import { AppComponent } from './components/app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { DashboardComponent } from './pages/dashboard.component'
import { HomeComponent } from './pages/home.component'
import { NgModule } from '@angular/core'

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, DashboardComponent, HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
