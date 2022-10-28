import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import { Toast } from './UsingClass';
import Movie from './Movie';
import User from './User';
// import { Login } from './LoginWithStates';
import {Login, OkToast, ErrorToast} from './LoginWithStates'
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink,useLocation,useParams} from 'react-router-dom'
import { WithHttp } from './SimpleHttp';

let C1 = () => {return (<h2>A sub-heading created in component c1</h2>)} //this is ts code returning html, hence it is tsx code 
let user:any = {username:'admin',pwd:'nimda'}
let C2 =() => {return (<p> Username: {user.username} | Password: {user.pwd}</p>)}
let C3=() => {return (<img src={logo}/>)}
let C4=()=> {return(
  <div>
    <input type='text' value={user.username}/>
    <br/>
    <input type='password' value={user.pwd}/>
    <br/>
    <button>login</button>
  </div>
)}

//since the function returns html, hence it can be accessed as <App> inside index.tsx
function App(){
  return (
    <>
    <div>
      <BrowserRouter>
      <div>
        <NavLink to='/login'>Login</NavLink>
        <span>|</span>
        <NavLink to='/movie'>Movies</NavLink>
        <span>|</span>
        <NavLink to='/http'>Web Api Communication</NavLink>
      </div>
        {/* to add configs use routes */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<><Movie movieName='Jumanji' rating='5' dp='logo192.png'/>
    <Movie movieName='Jumanji-Welcome to the jungle' rating='4' dp='logo192.png'/>
    <Movie movieName='Jumanji-III' rating='4.5' dp='logo192.png'/></>} />
    <Route path='/http' element={<WithHttp/>}/>
        </Routes> 
    
      </BrowserRouter>
    </div>
    {/* <Toast/>
    <C3/>
    <h1> hello react</h1>
    <hr/>
    <WithHttp/>
    <hr/>
    <Login/>
    <hr/>
    <C1/>
    <hr/>
    <C2/>
    <hr/>
    <C4/>
    <hr/>
    <ColorComponent/>
    <hr/>
    <Movie movieName='Jumanji' rating='5' dp='logo192.png'/>
    <Movie movieName='Jumanji-Welcome to the jungle' rating='4' dp='logo192.png'/>
    <Movie movieName='Jumanji-III' rating='4.5' dp='logo192.png'/>
    <hr/>
    <User userName="Sneha" pwd="admin" dp='logo192.png'/>
    <User userName="yashu" pwd="nimda" dp='logo192.png'/>
    <User userName="Shilpa" pwd="abc" dp='logo192.png'/> */}

    </>
  )
}
//only one default app per file
export default App





