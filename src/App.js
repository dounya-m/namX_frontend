
import './App.css';
import './assets/style/style.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react';
import {Home, About, ErrorNotFound} from './pages/index'
import Layout from './components/commun/Layout';

function App() {
  useEffect(() => {
    document.title = 'namX'
  }, [])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout>{<Home />}</Layout>} />
        <Route path='/about' element={<Layout>{<About />}</Layout>} />

        <Route path='*' element={<ErrorNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
