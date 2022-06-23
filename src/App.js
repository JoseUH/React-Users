import './App.css';
import Navigator from "./components/Navigator/Navigator";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import { RequireAuth } from "./components/RequireAuth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SWContextProvider } from "./context/context";


function App() {
  return (
    <Router>
    <SWContextProvider>
      <div className="App">
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={
              <RequireAuth>
                <Gallery />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      </SWContextProvider>
    </Router>
  );
}

export default App;
