import './App.css'
import Counter from './components/Counter'
import User from './components/User.jsx'
import ToggleText from './components/ToggleText.jsx'

function App() {
  return (
    <>
      <User name="Daniel" age={30} profession="Hola" />
      <Counter />
      <ToggleText initial="Hello" alternate="World" />
    </>
  )
}

export default App
