import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
