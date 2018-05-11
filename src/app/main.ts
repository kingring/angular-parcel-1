import { AppModule } from './app.module'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

if (process.env.NODE_ENV === 'production') {
  enableProdMode()
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if (module['hot']) {
      module['hot'].accept()
      module['hot'].dispose(() => {
        window.location.reload()
      })
    }
  })
  .catch(err => console.error(err))
