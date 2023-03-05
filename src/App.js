import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeTemplate from './Template/HomeTemplate';
import Home from './Pages/Home/Home';
import CheckOut from './Pages/CheckOut/CheckOut';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomeTemplate Component={Home} />} />
        <Route path='/checkout' element={<HomeTemplate Component={CheckOut} />} />

      </Routes>
    </Fragment>
  );
}

export default App;
