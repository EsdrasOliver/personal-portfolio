import './App.css'
import { Home } from './components/Home/Home'
import { Navigation } from './components/Navigation/Navigation'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className='styles-main'>
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  )
}

export default App
