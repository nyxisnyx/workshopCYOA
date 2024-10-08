import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry8 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="8">
            <p className="storyEntry">La fée sourit à nouveau, et cette fois un frisson te court le long de la colonne vertébrale. “Nous avons des moyens de décider qui est fiable ou non. Aide-moi et je te récompenserai dignement.”</p>
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

export default Entry8