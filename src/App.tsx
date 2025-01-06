import Authentication from "@/pages/Authentication";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home/Home";
import "@/styles/css/style.css";
import theme from "@/styles/theme/theme";
import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={5}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/*" element={<div>404</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
