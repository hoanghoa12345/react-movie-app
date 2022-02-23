import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import 'swiper/swiper.min.css'

import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Routes from './config/Routes';
import Footer from './components/footer/Footer';

function App() {
  // https://youtu.be/ntYXj9W1Ez8?t=8874
  return (
    <BrowserRouter>
      <Route render={props => (
        <>
          <Header {...props}/>
          <Routes/>
          <Footer/>
        </>
      )}/>
    </BrowserRouter>
  );
}

export default App;
