import './App.css';

import { Navbar } from './components';
import { AboutUs, Chef, Header, SpecialMenu } from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
    </div>
  );
}

export default App;
