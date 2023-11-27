import './App.css';

import { Navbar } from './components';
import { AboutUs, Chef, Header, SpecialMenu, Intro } from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
    </div>
  );
}

export default App;
