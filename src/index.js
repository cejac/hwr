import React from 'React';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Detail from './pages/Detail';

const Root = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Detail} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(<Root />, document.getElementById('app'));
