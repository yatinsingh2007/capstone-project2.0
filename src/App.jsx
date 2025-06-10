import { ToastContainer } from 'react-toastify'
import './App.css'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage';
import ProfileSectionDetails from './components/ProfileSectionDetails';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import Oppertunities from './components/Oppertunities';
import Jobs from './components/Jobs'
import ProfileSection from './components/ProfileSection';
import FormProvider from './context/FormContext.jsx'
import CardContextProvider from './context/CardContextProvider.jsx';
import Notifications from './components/Notifications.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <FormProvider>
          <CardContextProvider>
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profiledetails' element={<ProfileSectionDetails />} />
              <Route path='/main' element={<MainPage />} />
              <Route path='/opper' element={<Oppertunities />} />
              <Route path='/job' element={<Jobs />} />
              <Route path='/myProfile' element={<ProfileSection />} />
              <Route path = '/notifications' element = {<Notifications />} />
            </Routes>
          </CardContextProvider>
        </FormProvider>
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
