import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry15 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="15">
            <p className="storyEntry">Alors que ton sang s’écoule librement de tes blessures, nourrissant l’arbre contre lequel tu t’étais endormi avant cette rencontre, tu fermes les yeux pour la dernière fois, un sentiment de regret s’emparant de toi. C’est donc ça, ta dernière aventure ?</p>
            <button onClick={() => {
                setStoryIndex(0)
            }}>Recommencer</button>
        </div>
    )
};

export default Entry15