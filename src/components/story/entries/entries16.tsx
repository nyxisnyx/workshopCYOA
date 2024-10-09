import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry16 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="16">
            <p className="storyEntry">La fée joint les mains avec un sourire lumineux (littéralement, dans son cas, puisque c’est une fée). “Fabuleux ! Je te laisse continuer ta route vers le village humain, dans cette direction. Je t’attendrai ici.”
            </p>
            <p className="finPrologue">Félicitations ! Tu as atteint la fin du prologue. Pour l'instant, le reste de l'histoire n'est pas encore disponible, mais tu peux cliquer sur le bouton ci-dessous pour retourner à la sélection du personnage.</p>
            <button onClick={() => {
                setStoryIndex(0)
            }}>Recommencer</button>
        </div>
    )
};

export default Entry16