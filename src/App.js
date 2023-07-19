import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
)

export default App
