import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import AuthForm from "./auth/authForm"
import ContactForm from "./components/ContactForm"
import { AuthProvider } from "./context/authContext"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthForm/>}/>
        <Route path="/contact" element={<ContactForm/>}/>
      </Routes>
    </AuthProvider>
  )
}

export default App