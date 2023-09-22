import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<News key="general" pageSize="5" category="general"/>}></Route>
        <Route exact path="/about" element={<News key="about" pageSize="5" category="about"/>}></Route>
        <Route exact path="/business" element={<News key="business" pageSize="5" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize="5" category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News key="general" pageSize="5" category="general"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize="5" category="health"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize="5" category="science"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize="5" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize="5" category="technology"/>}></Route>
        </Routes>
        </BrowserRouter>
      </>
    );
  }
}
