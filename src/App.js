import React from 'react';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/organisms/Header';
import { Route, Switch } from 'react-router-dom';
import Issue from './pages/Issue';
import PullRequest from './pages/PullRequest';
import Index from './pages/Index.js';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/issue' component={Issue} />
        <Route path='/pull-request' component={PullRequest} />
        <Route exact path='/' component={Index} />{/* pathの検索方法が前方置換なのでexactを宣言して完全一致にしてあげる */}
      </Switch>
    </div>
  );
}

export default App;
