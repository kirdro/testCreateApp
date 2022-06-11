import logo from './logo.svg';
import './App.css';
import MainHeader from "./components/header";
import {DivBackHeaderSC} from "./styles/header.styles";
import MainPost from "./components/posts";

function App() {
  return (
    <div className="App">
        <MainHeader></MainHeader>
        <DivBackHeaderSC></DivBackHeaderSC>
        <div className={'content'}>
            <MainPost/>
        </div>
    </div>
  );
}

export default App;
