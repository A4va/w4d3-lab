import Effect from "./components/Effect"
import { Routes , Route, useNavigate } from "react-router-dom"
import Post from "./components/Post"
function App() {
  const Navigate = useNavigate()

  return (
    <div className="center">
    <header>
      <button onClick={()=>Navigate("/")}>Effect</button>
      <button onClick={()=>Navigate("/Create")}>Post</button>
    </header>
      <Routes>
      <Route path="/" element={<Effect/>}/>
        <Route path="/Create" element={<Post/>}/>
        {/* <Route/> */}
      </Routes>
      
    </div>
  )
}

export default App
