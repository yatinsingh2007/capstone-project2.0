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
import CreatePostForm from './components/CreatePostForm.jsx'
import ContactForm from './components/ContactForm.jsx';
import MyProfile from './components/MyProfile.jsx';
import FAQSection from './components/FAQSection.jsx';
import EditProfile from './components/EditProfile.jsx';


function App() {
  return (
  <ThemeProvider>
    <AuthProvider>
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
              <Route path='/create-post' element = {<CreatePostForm/>} />
              <Route path = '/contact' element = {<ContactForm/>} />
              <Route path='/myProfile' element = {<MyProfile/>} />
              <Route path='/faqs' element={<FAQSection />} />
              <Route path='/editProfile' element={<EditProfile/>} />
            </Routes>
          </CardContextProvider>
        </ConnectionsProvider>
        <ToastContainer theme="colored" />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
  );
}

export default App;