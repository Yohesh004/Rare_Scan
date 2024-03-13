import "./App.css";
import { Layout } from "antd";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home"
import Collection from "./components/Collection"
import {Routes, Route} from "react-router-dom";
import React from "react";
import {Helmet} from "react-helmet";



function App() {
  <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>RARE-SCAN</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="Its a NFT Ranker Tool" content="Helmet application" />
    </Helmet>
   </div>
  return (
    
    <Layout className="mainWindow">
      <Sidebar />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collection/:contract" element={<Collection />} />
      </Routes>
    </Layout>
  );
}

export default App;