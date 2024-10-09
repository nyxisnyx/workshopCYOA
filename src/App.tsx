import CharacterSheet from './components/character/character'
import Story from './components/story/story'
import './App.css'
import MyProvider from './context/myProvider'

function App() {

  return (
    <>
      <MyProvider>
        <div id="gridProvider">
          <div id="storyContainer"><Story /></div>
          <div id="characterSheetContainer"><CharacterSheet /></div>
        </div>
      </MyProvider>
    </>
  )
}

export default App
