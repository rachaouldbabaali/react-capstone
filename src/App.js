import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    // Wrap the App component with the Provider component, passing the store as a prop
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
