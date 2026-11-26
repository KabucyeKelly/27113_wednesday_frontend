import { useState } from 'react'
import { Routes, Route } from 'react-router'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LibraryHeader from './Componets/LibraryHeader'
import LibraryMain from './Componets/LibraryMain'
import LibraryLogin from './Componets/LibraryLogin'
import Office from './Componets/office'
import OfficeList from './Componets/OfficeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <>
     
     <Routes>
      <Route path="/" element={<LibraryLogin/>} />
      <Route path="/Main" element={<LibraryMain/>} />
      <Route path="/offices" element={<OfficeList/>} />
      <Route path="/office/save" element={<Office/>} />
     </Routes>
    </>
  
    </>
  )
}

export default App