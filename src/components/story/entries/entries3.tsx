import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry3 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="3">
            <p className="storyEntry">La fée s’assied en tailleur, ses ailes battant comme celles d’un colibri pour la maintenir en l’air et sur place. <br />
            “Je sais que tu viens d’arriver dans la région, $Name, et que tu cherches du travail. <br />
                Tout bon aventurier sait reconnaître l’importance d’une quête, pas vrai ? Eh bien, j’en ai une à te proposer. <br />
                Les humains de ce village ont volé une relique importante pour mon peuple sous couvert de vouloir faire du commerce avec nous. Je veux la récupérer, et c’est là que tu interviens.”</p>
            <button onClick={() => {
                setStoryIndex(6)
            }}>Continuer</button>
        </div>
    )
};

export default Entry3