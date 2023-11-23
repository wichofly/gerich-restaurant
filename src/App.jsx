import './App.css';

import { Navbar } from './components';
import { AboutUs, Header } from './container';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
