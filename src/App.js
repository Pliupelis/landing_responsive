import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./components/pages/signIn";
import Home from "./components/pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signin" element={<SignInPage />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
