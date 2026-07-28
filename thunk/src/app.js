import "./styles.css";
import { AllRoutes } from "./pages/all-routes";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import Home from "./pages/home";
import Posts from "./pages/posts";

export default function App() {
  return <div className="App">
    <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/posts" element={<Posts></Posts>}/>
        </Routes>
    <AllRoutes />
   
  
   
  </div>;
}
