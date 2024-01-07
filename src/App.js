import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Collections from './components/Collections';
import Clothes from './components/Clothes';
import page from './components/pages/page';
import Product from './components/ProductPage/Product';
import ContactUsPage from './components/ContactUs/ContactUsPage';
import Audio from './components/AudioPlayer/Audio';
import Register from './components/LoginRegisterPages/Register';
import Login from './components/LoginRegisterPages/Login';
import Cart from './components/Cart/Cart';

const Layout = ({ children }) => (
  <>
    <Audio />
    {children}
  </>
);

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/collections' Component={Collections}/>
        <Route path='/collections/:type' Component={Clothes}/>
        <Route path='/pages/:type' Component = {page}/>
        <Route path='/collections/:type/products' Component={Product}/>
        <Route path='/contact' Component={ContactUsPage}/>
        <Route path='/register' Component={Register}/>
        <Route path='/login' Component={Login}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
      
    </Router>
  );
}

export default App;
