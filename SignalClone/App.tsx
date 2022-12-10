import { StatusBar } from 'react-native'
import { Navigation } from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
      <Navigation />
    </>
  );
}
