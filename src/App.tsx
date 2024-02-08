import { useState } from 'react'
import './App.css'
import Box from './components/Box'
import Header from './components/Header'
import Output from './components/Output'

function App() {
  const [password, setPassword] = useState('a1b1c1d1e1f1')

  return (
    <div className='w-[343px] md:w-[540px]'>

      <Header />
      <Output password={password} />
      <Box setPassword={setPassword} />
    </div>
  )
}

export default App
