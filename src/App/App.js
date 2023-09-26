import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Pricing from '../components/Pricing/Pricing';
import '../styles.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/pricing" element={<Pricing />}/>
            <Route exact path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
