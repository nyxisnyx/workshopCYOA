import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry5 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="5">
            <p className="storyEntry">Avec un petit rire mutin, la fée s’échappe d’entre tes doigts alors qu’ils allaient se refermer sur elle et se repose sur ton nez. <br />
                “Allons, allons, pas la peine de s’agiter. J’ai une proposition à te faire, une proposition qui nous arrangera tous les deux.”</p>
            <button onClick={() => {
                setStoryIndex(3)
            }}>Lui demander ce qu'elle veut</button>
        </div>
    )
};

export default Entry5