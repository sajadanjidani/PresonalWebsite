import { Routes , Route } from "react-router-dom";
// import component
import HomePage from "./Component/HomePage/HomePage";
import PortfolioPage from "./Component/PortfolioPage/PortfolioPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Portfolio/:PortfolioId" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
