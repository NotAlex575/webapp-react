import Defaultlayout from "./layouts/Defaultlayout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import OneFilm from "./pages/oneFilm"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout></Defaultlayout>}>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/oneFilm" element={<OneFilm></OneFilm>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
