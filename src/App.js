import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninForm from "./components/Auth/SigninForm";
import SignupForm from "./components/Auth/SignupForm";
import HomePage from "./components/Home";
import Applayout from "./components/Layout/Applayout";
import TaskManager from "./components/TaskManager";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/task" element={<TaskManager />} />
          <Route path="/auth/sign-in" element={<SigninForm />} />
          <Route path="/auth/sign-up" element={<SignupForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
