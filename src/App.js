import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, News } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <Routes className="routes">
            <Route path="/" element={<Homepage/>}/>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
            <Route path="/exchanges" element={<Exchanges/>}/>
            <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
            <Route path="/news" element={<News/>}/>
          </Routes>
        </Layout>
      </div>
      
    </div>
  );
}

export default App;
