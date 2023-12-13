import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard, Error, Landing, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={500} />
      </BrowserRouter>
    </>
  );
}

export default App;
