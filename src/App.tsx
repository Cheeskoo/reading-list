import Header from "./pages/Header";
import Home from "./pages/Home"
import {useState} from "react"

export default function App(){
  const [addBtn, setAddBtn] = useState<boolean>(true)
  return(
    <>
      <Header addBtn={addBtn} setAddBtn={setAddBtn} />
      <Home />
    </>
  )
}