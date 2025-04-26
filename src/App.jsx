import { ToastContainer } from 'react-toastify'
import './App.css'
import LoginPage from './components/LoginPage'
import LandingPage from './components/LandingPage';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
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
        theme="light"
      />
    </>
  )
}
export default App
