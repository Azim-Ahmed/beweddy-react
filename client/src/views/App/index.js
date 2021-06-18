import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

// Pages
const Home = lazy(() => import('../Home'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={''}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
