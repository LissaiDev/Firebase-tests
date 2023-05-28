import Home from "./pages/Home/App"
import "./App.scss"
import {Routes, Route} from "react-router-dom"
import Main from "./pages/Main/App"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main/>} />
      </Routes>
    </>
  )
}

export default App
