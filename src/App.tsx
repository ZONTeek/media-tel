import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './Pages/Navigation/Navigation';
import { Header } from './Components/Header/Header';
import { DrawerComponent } from './Components/Drawer/DrawerComponent';
import { MainWrapper } from './Components/MainWrapper/MainWrapper';
import { store } from './store/store';

import './App.css';


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header /> 
        <DrawerComponent />
        <MainWrapper>
          <Navigation />
        </MainWrapper>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
