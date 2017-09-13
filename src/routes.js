import React from 'React';
import {HashRouter, Switch, Route} from 'react-router-dom';

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={List} />
      <Route exact path='/detail/:repo' component={Detail} />
    </Switch>
  </HashRouter>
)

export default Routes
