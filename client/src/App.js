import './index.css';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer';
import Login from './Pages/Account/Login';
import Register from './Pages/Account/Register';

function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
