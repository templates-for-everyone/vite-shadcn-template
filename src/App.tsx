import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme/ThemeProvider'
import Home from './pages/Home'

function App() {
  return (
    <ThemeProvider storageKey="app-theme">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more Route here */}
      </Routes>
    </ThemeProvider>
  )
}

export default App
