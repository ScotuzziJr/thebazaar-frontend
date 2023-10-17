import { createTheme, ThemeProvider } from '@mui/material';
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";


const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
