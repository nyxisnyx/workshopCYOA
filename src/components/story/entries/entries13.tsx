import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry13 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="13">
            <p className="storyEntry">Se redressant de toute sa (modeste) hauteur, la fée te fusille du regard. Son rictus expose ses dents pointues, qui semblent soudain bien plus longues, et bien plus tranchantes. “Comment oses-tu ? Puisque c’est comme ça, tu ne t’en iras pas vivant !”</p>
            <button onClick={() => {
                setStoryIndex(14)
            }}>Continuer</button>
        </div>
    )
};

export default Entry13