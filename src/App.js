import Header from '../src/components/shared/header/index';
import Aside from '../src/components/shared/aside/index';
import Footer from '../src/components/shared/footer/index';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Aside/>
      <Footer/>
    </div>
  );
}

export default App;
