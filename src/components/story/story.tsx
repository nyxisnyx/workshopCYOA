import { useContext } from 'react'
import { StoryProgression } from '../../context/myProvider'
import { Entry0 } from './entries/entries0'
import { Entry1 } from './entries/entries1'
import { Entry2 } from './entries/entries2'
import { Entry3 } from './entries/entries3'
import { Entry4 } from './entries/entries4'
import { Entry5 } from './entries/entries5'
import { Entry6 } from './entries/entries6'
import { Entry7 } from './entries/entries7'
import { Entry8 } from './entries/entries8'
import { Entry9 } from './entries/entries9'
import { Entry10 } from './entries/entries10'
import { Entry11 } from './entries/entries11'
import { Entry12 } from './entries/entries12'
import { Entry13 } from './entries/entries13'
import { Entry14 } from './entries/entries14'
import { Entry15 } from './entries/entries15'
import { Entry16 } from './entries/entries16'

export function Story() {
  const { storyIndex } = useContext(StoryProgression)
  const routing = () => {
    if (storyIndex === 0) {
      return (<Entry0 />)
    } else if (storyIndex === 1){return (<Entry1 />)}
    else if (storyIndex === 2){return (<Entry2 />)}
    else if (storyIndex === 3){return (<Entry3 />)}
    else if (storyIndex === 4){return (<Entry4 />)}
    else if (storyIndex === 5){return (<Entry5 />)}
    else if (storyIndex === 6){return (<Entry6 />)}
    else if (storyIndex === 7){return (<Entry7 />)}
    else if (storyIndex === 8){return (<Entry8 />)}
    else if (storyIndex === 9){return (<Entry9 />)}
    else if (storyIndex === 10){return (<Entry10 />)}
    else if (storyIndex === 11){return (<Entry11 />)}
    else if (storyIndex === 12){return (<Entry12 />)}
    else if (storyIndex === 13){return (<Entry13 />)}
    else if (storyIndex === 14){return (<Entry14 />)}
    else if (storyIndex === 15){return (<Entry15 />)}
    else if (storyIndex === 16){return (<Entry16 />)}
    else { 
      return(null)
      }
  }
  return (
    <>
      { routing() }
    </>
  )
}
  
export default Story