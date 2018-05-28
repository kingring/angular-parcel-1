import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './home/home.component'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
