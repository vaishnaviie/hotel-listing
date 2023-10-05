import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import PropertyPage from "./pages/propertyPage/PropertyPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proprty/:ID" element={<PropertyPage />} />
      </Routes>
    </div>
  );
}

export default App;
