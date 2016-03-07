import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './modules/core'
import Login from './modules/login'

 const App = (store, history) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
            <IndexRoute component={Login}/>
       </Route>
    </Router>
  </Provider>
)

export default App