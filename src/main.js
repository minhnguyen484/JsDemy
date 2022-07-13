import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue-pro'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import installElementPlus from './plugins/element-plus'
import { GlobalCmComponent } from 'codemirror-editor-vue3'

const app = createApp(App)

installElementPlus(app)

app.use(GlobalCmComponent)
app.use(store)
app.use(router)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.mount('#app')
