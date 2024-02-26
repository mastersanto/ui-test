import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="max-centered">
        <Content />
        <hr className="separator" />
        <Footer />
      </div>
    </>
  );
}

export default App;
