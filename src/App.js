import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Requests from './components/Requests';
import Users from './components/Users';
import Resources from './components/Resources';
import ResourceDetails from './components/ResourceDetails';
import CreateItem from './components/CreateItem';
import LoginPage from './components/LoginPage';
import { LoginContext } from './context/LoginContext';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState("false");

  return (<>
    <LoginContext.Provider value={{login, setLogin}} >
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/users" element={<Users />} />
          <Route path="/resource/:id" element={<ResourceDetails />} />
          <Route path="/resource/create" element={<CreateItem />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  </>);
}

export default App;
