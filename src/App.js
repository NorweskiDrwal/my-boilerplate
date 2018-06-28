import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
// Styles
// routes
import routes from './routes';
// common components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
// assets

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Header />
            { routes }
            <Footer />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
