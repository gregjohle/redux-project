import "./App.css";
import Header from "./components/header";
import Value from "./components/value";
import Inputs from "./components/inputs";
import Explain from "./components/explain";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Value />
      <Inputs />
      <Explain />
      <Footer />
    </div>
  );
}

export default App;
