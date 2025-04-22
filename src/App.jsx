import { ToastContainer } from 'react-toastify'
import './App.css'
import LoginPage from './components/LoginPage'
function App() {
  return (
    <>
      <LoginPage />
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
