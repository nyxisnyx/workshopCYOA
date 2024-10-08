import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry11 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="11">
            <p className="storyEntry">La fée te semble parfaitement honnête.</p>
            <button onClick={() => {
                setStoryIndex(16)
            }}>Accepter d'aider la fée</button>
            <br />
            <button onClick={() => {
                setStoryIndex(13)
            }}>Refuser d'aider la fée</button>
        </div>
    )
};

export default Entry11