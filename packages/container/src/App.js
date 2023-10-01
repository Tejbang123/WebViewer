import React ,{lazy,Suspense,useState,useEffect}from 'react';
import { Router,Route,Switch ,Redirect} from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';
import Header from './components/Header';
import Progress from './components/Progress.js';
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const WebviewerLazy = lazy(() => import('./components/WebviewerApp'));
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn,setIsSignedIn] = useState(false);
  const [isPropPass,setIsPropPass] = useState('');

  useEffect(() =>{
    if(isSignedIn){
      history.push('/webviewer');
    }
  },[isSignedIn])
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
          <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onPropPass={(val) => setIsPropPass(val)} onSignIn={() => setIsSignedIn(true)}/>
            </Route>
            <Route path="/webviewer">
              {!isSignedIn && <Redirect to="/"/>}
              <WebviewerLazy onPropPass={isPropPass} onSignIn={() => setIsSignedIn(true)}/>
            </Route>
            <Route path="/">
              <MarketingLazy />
            </Route>
          </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
