import "./App.css";

import { Navbar, Menu, AboutUs, Gallery, Footer } from "./Components";

function App() {
  return (
    <div className="bg-red-500">
      <Navbar />
      <Menu />
      <AboutUs />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
