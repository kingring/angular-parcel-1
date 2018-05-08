import { AppModule } from './app.module'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import registerServiceWorker from './service-worker'

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
  registerServiceWorker()
}

platformBrowserDynamic().bootstrapModule(AppModule)
