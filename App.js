import React from 'react';
import Tabs from './navigation/footerTabs';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {

  return(
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;