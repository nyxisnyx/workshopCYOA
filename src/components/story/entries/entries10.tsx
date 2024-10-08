import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry10 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="10">
            <p className="storyEntry">Elle ne t’a pas menti, mais elle ne te dit pas toute la vérité non plus.</p>
            <button onClick={() => {
                setStoryIndex(12)
            }}>Tu dis à la fée que tu sais qu’elle te cache quelque chose, et que tu ne l’aideras pas si elle n’est pas honnête envers toi.</button>
        </div>
    )
};

export default Entry10