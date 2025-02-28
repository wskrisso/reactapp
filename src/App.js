import Container from './components/Container/Container';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
 </main>
  );
};

export default App;