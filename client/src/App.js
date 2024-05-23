import AllRoute from "./allRoute/AllRoute";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <h1>Traincape Technology</h1> */}
      <Navbar/>
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
