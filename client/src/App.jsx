import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './scenes/loginPage/index.jsx';
import HomePage from './scenes/homePage/index.jsx';
import ProfilePage from './scenes/profilePage/index.jsx';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { themeSettings } from './theme.js';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
