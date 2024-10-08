import CharacterSheet from './components/character/character'
import Story from './components/story/story'
import './App.css'
import MyProvider from './context/myProvider'

function App() {

  return (
    <>
      <MyProvider>
        <div id="gridProvider">
          <Story />
          <CharacterSheet />
        </div>
      </MyProvider>
    </>
  )
}

export default App
