import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry6 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="6">
            <p className="storyEntry">La fée a raison sur un point : tu cherches du travail. Tu pourrais l’aider, mais pas gratuitement. Tu lui demandes quelle compensation tu peux t’attendre à recevoir de sa part si tu parviens à récupérer l’objet volé et à le lui rendre.</p>
            <button onClick={() => {
                setStoryIndex(7)
            }}>Continuer</button>
        </div>
    )
};

export default Entry6