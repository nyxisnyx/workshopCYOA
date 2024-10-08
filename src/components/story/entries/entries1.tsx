import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry1 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="1">
            <p className="storyEntry">Tu te réveilles d’une longue sieste sous un arbre. Une fée est perchée sur ton nez et te regarde fixement.</p>
            <button onClick={() => {
                setStoryIndex(2)
            }}>Essayer de la repousser du plat de la main</button>
            <p>(Cette option nécessitera un jet de dextérité.)</p>
            <br />
            <button onClick={() => {
                setStoryIndex(3)
            }}>Lui demander qui elle est et ce qu’elle veut</button>
        </div>
    )
};

export default Entry1