// App.jsx
import Header from "./components/Header/Header"; // Adjust the path if necessary
import LowerHeader from "./components/LowerHeader/LowerHeader";
import ResponsiveCarousel from "./components/ResponsiveCarousel/ResponsiveCarousel";
function App() {
  return (
    <div>
      <Header />
      <LowerHeader />
      <ResponsiveCarousel />
      {/* Other components can follow here */}
      {/* <main style={{ paddingTop: "60px" }}> </main> */}
    </div>
  );
}

export default App;
