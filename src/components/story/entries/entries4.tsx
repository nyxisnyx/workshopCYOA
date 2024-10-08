import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry4 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="4">
            <p className="storyEntry">Tu réussis à t’emparer de la fée et à la repousser de ton visage. Avant que tu puisses la chasser, cependant, elle te demande de l’écouter car elle a une proposition à te faire.</p>
            <button onClick={() => {
                setStoryIndex(3)
            }}>Continuer</button>
        </div>
    )
};

export default Entry4