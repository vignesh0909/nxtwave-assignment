import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Requests from './components/Requests';
import Users from './components/Users';
import Resources from './components/Resources';

function App() {
  return (<>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Resources />} />
        <Route path="requests" element={<Requests />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
