import './App.css';

import { Navbar } from './components';
import {
  AboutUs,
  Chef,
  Header,
  SpecialMenu,
  Intro,
  Laurels,
  Gallery,
  FindUs,
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
      <Gallery />
      <FindUs />
    </div>
  );
}

export default App;
