import { ToastContainer } from 'react-toastify';
import './App.css';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import Oppertunities from './components/Oppertunities';
import Jobs from './components/Jobs';
import { CardContextProvider } from './context/CardContextProvider.jsx';
import Notifications from './components/Notifications.jsx';
import {ConnectionsProvider} from './context/Connecitons.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { AuthProvider } from './context/AuthProvider.jsx';

function AppContent() {

  return (
      <BrowserRouter>
        <ConnectionsProvider>
          <CardContextProvider>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/opper' element={<Oppertunities />} />
              <Route path='/job' element={<Jobs />} />
              <Route path='/notifications' element={<Notifications />} />
            </Routes>
          </CardContextProvider>
        </ConnectionsProvider>
        <ToastContainer theme="colored" />
      </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
          <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;