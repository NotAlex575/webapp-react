import Defaultlayout from "./layouts/Defaultlayout"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import OneMovie from "./pages/OneMovie"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Defaultlayout></Defaultlayout>}>
            <Route path="/">
              <Route path="" element={<Homepage></Homepage>}></Route>
              <Route path=":id" element={<OneMovie></OneMovie>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
