import './App.css'
import { Home } from './components/Home/Home'
import { Navigation } from './components/Navigation/Navigation'
import { About } from './components/About/about'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
    </div>
  )
}

export default App
