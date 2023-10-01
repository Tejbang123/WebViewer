import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import WebViewer from './component/WebViewer';
import App from './component/App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'wa',
});

export default ({ history,onPropPass }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/webviewer">
              <WebViewer onPropPass={onPropPass}/>
            </Route>
            {/* <Route exact path="/webviewer" component={App} /> */}
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
