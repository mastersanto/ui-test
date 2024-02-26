import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}