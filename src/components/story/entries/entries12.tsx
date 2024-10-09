import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry12 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="12">
            <p className="storyEntry">Avec une moue boudeuse, la fée croise les bras et lève les yeux au ciel. <br />
            “D’accord, d’accord. J’ai vraiment besoin de ton aide, alors autant te dire les vrais enjeux. La relique contient une partie de l’essence divine de Vyvian, la sainte patronne des fées. Sans le pouvoir de cette relique, nous sommes coincés sur le plan matériel, sans aucun moyen de rentrer chez nous.”</p>
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

export default Entry12