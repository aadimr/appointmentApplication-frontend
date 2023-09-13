import './App.css';
import Header from './header/Header';
import LandingPage from './pages/landingPage/LandingPage';
import AdminLogIn from './pages/adminLogIn/AdminLogIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/admin/logIn" element={<AdminLogIn/>} />
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
