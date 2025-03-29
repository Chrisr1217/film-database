import { Route, Routes } from "react-router-dom";
import { Home, Movies } from "./Views";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
}

export default App;
