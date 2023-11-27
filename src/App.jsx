import './App.css';

import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  Header,
  SpecialMenu,
  Intro,
  Laurels,
} from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
    </div>
  );
}

export default App;
