// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { ProjectScreen } from './screens/ProjectScreen';
import { MainScreen } from './screens/MainScreen.js';
import { ContactScreen } from './screens/ContactScreen.js';



const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/portfolio" element={<HomeScreen />} />
              <Route path="/project/:id" element={<ProjectScreen />} />
              <Route path="/main" element={<MainScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
