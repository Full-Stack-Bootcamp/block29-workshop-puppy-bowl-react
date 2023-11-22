// In order to create functionality for detail buttons
// Use BrowserRouter to create different routes
// Ill need to create a route for each dog @ details/${id}
//

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SinglePlayer from "./assets/Components/SinglePlayer";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
