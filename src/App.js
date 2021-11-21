import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import SignIn from './pages/Login/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='signIn' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
