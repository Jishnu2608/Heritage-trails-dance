import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';
import './App.css';
import ContentDance from "./components/Content/content-dance";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentDance/>
      <Footer/>
    </div>
  );
}

export default App;
