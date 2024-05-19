import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import LogIn from "./Pages/LogIn";
import SubmitHeight from "./Pages/SubmitHeight";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/submit-height" element={<SubmitHeight />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
