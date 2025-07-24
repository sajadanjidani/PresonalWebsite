import { Routes , Route } from "react-router-dom";
// import component

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
