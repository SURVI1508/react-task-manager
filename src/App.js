import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninForm from "./components/Auth/SigninForm";
import SignupForm from "./components/Auth/SignupForm";
import HomePage from "./components/Home";
import Applayout from "./components/Layout/Applayout";
import TaskManager from "./components/TaskManager";
import { AuthProvider } from "./context/authContext";
import { TaskProvider } from "./context/taskContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <TaskProvider>
            <Routes>
              <Route path="/" element={<TaskManager />} />
              <Route path="/auth/sign-in" element={<SigninForm />} />
              <Route path="/auth/sign-up" element={<SignupForm />} />
            </Routes>
          </TaskProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
