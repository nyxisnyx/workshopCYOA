import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry14 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="14">
            <p className="storyEntry">Tu es brave, mais tu n'es pas bien fort. La fée a derrière elle des siècles d'expérience au combat, et des pouvoirs dont tu ne peux que rêver.</p>
            <button onClick={() => {
                setStoryIndex(15)
            }}>Continuer</button>
        </div>
    )
};

export default Entry14