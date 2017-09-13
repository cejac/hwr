import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';

import App from './pages/App';
import Detail from './pages/Detail';
import List from './pages/List';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={List} />
      <Route exact path='/' component={App} />
      <Route exact path='/detail/:repo' component={Detail} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<Root />, document.getElementById('app'));
