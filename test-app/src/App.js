import logo from './logo.svg';
import './App.css';
import MainHeader from "./components/header";
import {DivBackHeaderSC} from "./styles/header.styles";
import MainPost from "./components/posts";
import { Routes, Route, Link } from "react-router-dom";
import MainGallery from "./components/gallery";

function App() {
  return (
    <div className="App">
        <MainHeader></MainHeader>
        <DivBackHeaderSC></DivBackHeaderSC>
        <div className={'content'}>
            <Routes>
                <Route path="/" element={null} />
                <Route path="/blog" element={<MainPost/>} />
                <Route path="/gallery" element={<MainGallery/>} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
