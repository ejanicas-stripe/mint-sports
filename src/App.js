import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import Success from './components/Success'
import Cancelled from './components/Cancelled'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="success" element={<Success />} />
        <Route path="cancelled" element={<Cancelled />} />
      </Routes>
    </BrowserRouter>
  );
}
