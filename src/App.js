import { createTheme, ThemeProvider } from '@mui/material';

import HeaderLogin from "./components/HeaderLogin";
import Login from "./components/Login";


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
        <HeaderLogin />
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
