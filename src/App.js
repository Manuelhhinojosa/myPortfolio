import "./App.css";

import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import ProductList from "./components/ProductList/ProductList";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div
      style={{
        color: "wheat",
      }}
    >
      <Intro />
      <About />
      <ProductList />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
