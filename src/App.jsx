import { ToastContainer } from 'react-toastify'
import './App.css'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage';
import Name from './components/Name';
import ProfileSectionDetails from './components/ProfileSectionDetails';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element = {<SignUp />} />
            <Route path = '/profiledetails' element = {<ProfileSectionDetails />} />
            <Route path = '/main' element = {<MainPage/>} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
      </BrowserRouter>
    </>
  )
}
export default App
