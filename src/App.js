import { Routes , Route } from "react-router-dom";
// import component
import HomePage from "./Component/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
