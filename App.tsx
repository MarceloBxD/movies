import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './src/navigators/MainTabs';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};

export default App;
