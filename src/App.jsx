import './App.css'
import { Home } from './pages/Home/Home'
import { Navigation } from './pages/Navigation/Navigation'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects';
import { Skills } from './pages/Skills/Skills';

function App() {
  return (
    <div className='styles-main'>
      <Navigation></Navigation>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </div>
  )
}

export default App
