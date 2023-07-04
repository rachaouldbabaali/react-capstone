import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
