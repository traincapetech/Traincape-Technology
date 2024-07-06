import AllRoute from "./allRoute/AllRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import WebsiteCounter from "./components/WebsiteCounter";

function App() {
  return (
    <div className="App">
      {/* <h1>Traincape Technology</h1> */}
      <WebsiteCounter />
      <Navbar />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
