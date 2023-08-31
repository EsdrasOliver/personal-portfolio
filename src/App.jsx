import './App.css'
import { Home } from './components/Home/Home'
import { Navigation } from './components/Navigation/Navigation'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

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
