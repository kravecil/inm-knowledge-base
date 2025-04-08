import { Quasar, Dialog, Loading, Notify } from 'quasar'
import quasarLang from 'quasar/lang/ru'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

export const usePluginQuasar = (app) => app.use(Quasar, {
    plugins: { Dialog, Loading, Notify }, // import Quasar plugins and add here
    lang: quasarLang,
    /*
    config: {
      brand: {
        // primary: '#e46262',
        // ... or all other brand colors
      },
      notify: {...}, // default set of options for Notify Quasar plugin
      loading: {...}, // default set of options for Loading Quasar plugin
      loadingBar: { ... }, // settings for LoadingBar Quasar plugin
      // ..and many more (check Installation card on each Quasar component/directive/plugin)
    }
    */
})