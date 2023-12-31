import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Menubar from "./components/common/Menubar";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";

import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import IPLTable from "./components/pages/IPLTable";
import InputHandling from "./components/InputHandling";
import RegForm from "./components/pages/Form";
import ClassComp from "./components/ClassComp";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
        <Header />
        <Menubar />

        <div className="row bg-primary bg-opacity-25">
          <Sidebar />
          <div className="col-9 bg-custom1">



            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/ipltable" element={<IPLTable/>}/>
              <Route path="/input" element={<InputHandling/>}/>
              <Route path="/form" element={<RegForm/>}/>
              <Route path="/classcomp" element={<ClassComp/>}/>

            </Routes>
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised
            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. */}
          </div>
        </div>

        <Footer />
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;