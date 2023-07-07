import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
