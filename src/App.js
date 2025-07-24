import { Routes , Route } from "react-router-dom";
// import component
import HomeSection from "./Component/HomeSection/HomeSection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeSection />} />
      </Routes>
    </>
  );
}

export default App;
