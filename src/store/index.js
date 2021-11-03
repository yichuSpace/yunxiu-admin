import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'
import theme from './modules/theme.js'

import getters from './getters'

export default createStore({
  modules: {
    user,
    app,
    theme
  },
  getters
})
