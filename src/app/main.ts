import { AppModule } from './app.module'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

if (module['hot']) {
  module['hot'].accept(() => {
    window.location.reload()
  })
  module['hot'].dispose(() => {
    window.location.reload()
  })
}

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
