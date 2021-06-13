import React from 'react';
import Nav from "./components/Nav";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Import pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <AboutUs/>
    </div>
  );
}

export default App;
