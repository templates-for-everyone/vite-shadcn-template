import { Route, Routes } from 'react-router-dom'
import { ContextProviders } from '@/contexts/ContextProviders'
import Home from './pages/Home'

function App() {
  return (
    <ContextProviders>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more Route here */}
      </Routes>
    </ContextProviders>
  )
}

export default App
