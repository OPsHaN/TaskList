import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Login';
import { Provider } from 'react-redux';
import Store from './Redux/Strore';
import Addtask from './Components/Addtask';
import Tasklist from './Components/Tasklist';
import Updatetask from './Components/Updatetask';
import { NavLink } from 'react-router-dom'; 

function App() { 
  return (
<Provider store={Store}>
<div className="App">
<BrowserRouter>

<nav class="navbar navbar-expand-lg navbar-light bg-light p-0 px-3">
  <div class="container-fluid mb-0">
    <a class="navbar-brand" href="#">The Tasks</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav px-5">
        <li class="nav-item px-3">
      <NavLink
      exact
      activeClassName="nav-link active"
      className="nav-link"
      to={'/'}>
      Login
    </NavLink>
        </li>
        <li class="nav-item px-3">
        <NavLink
      exact
      activeClassName="nav-link active"
      className="nav-link"
      to={'/tasks'}>
      Tasks
    </NavLink>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/tasks' element={<Tasklist></Tasklist>}></Route>
<Route path='/task/add' element={<Addtask></Addtask>}></Route>
<Route path='/task/edit/:code' element={<Updatetask></Updatetask>}></Route>
</Routes>
</BrowserRouter>
<ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
