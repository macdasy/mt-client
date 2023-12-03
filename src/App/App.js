import Account from '../components/Account/Account';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Pricing from '../components/Pricing/Pricing';
import Upload from '../components/Upload/Upload';
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
            <Route exact path="/upload" element={<Upload />}/>
            <Route exact path="/account" element={<Account />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
