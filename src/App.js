import './App.css';
import pfp from './images/pfp.jpeg'
import Header from "./Header.js";
import Main from "./MainContent.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="pfp" src={pfp} alt="Picture"></img>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App;
