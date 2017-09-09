import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Detail from './pages/Detail';
import List from './pages/List';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={List} />
      <Route exact path='/react' component={Detail} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<Root />, document.getElementById('app'));
