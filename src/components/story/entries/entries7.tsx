import { useContext } from "react";
import { StoryProgression } from "../../../context/myProvider";


export const Entry7 = () => {
    const {setStoryIndex} = useContext(StoryProgression);

    return (
        <div id="7">
            <p className="storyEntry">La fée sourit, révélant des petites dents pointues qui ne sont pas sans rappeler celles d’un chat. “Tu recevras de l’or, bien entendu, et une amulette que tu trouveras utile dans tes prochaines aventures. Et puis, n’hésite pas à te servir chez ces voleurs, ça leur rendra la pareille. Seule notre relique m’intéresse.”</p>
            <button onClick={() => {
                setStoryIndex(8)
            }}>Demander à la fée pourquoi elle a décidé de venir te voir toi</button><br />
            <button onClick={() => {
                setStoryIndex(9)
            }}>Les faes sont connus pour leur personnalité trompeuse. Essayer de déterminer si elle dit la vérité.</button>
            <p>(Cette option nécessitera un jet de sagesse.)</p>
        </div>
    )
};

export default Entry7