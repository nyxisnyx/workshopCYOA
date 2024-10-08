import { useContext, useState } from "react";
import { CharacterStats, StoryProgression } from "../../../context/myProvider";

export const Entry9 = () => {
    const {setStoryIndex} = useContext(StoryProgression);
    const {characterStats} = useContext(CharacterStats);

    const [resultString, setResultString] = useState('')
    const [result, setResult] = useState(false)
    const jetSag = () => {
        let sagModifier = characterStats.wisdom
        let sagRoll = Math.floor(Math.random() * 6 + 1 + sagModifier);

        const passFail = sagRoll >= 3 ? true : false;

        setResultString(`Tu as obtenu ${sagRoll} à ton jet de dextérité. Tu as ${passFail? 'réussi' : 'échoué'}.`)
        setResult(passFail)
    }

    return (
        <div id="9">
            <p className="storyEntry">Clique sur le bouton pour effectuer un jet de sagesse (difficulté 3)</p>
            <button onClick={jetSag}>Jet de sagesse</button>
            {
                resultString && <div className="rollResult">
                    {resultString} <br />
                    <button onClick={() => {
                        result ? setStoryIndex(10) : setStoryIndex(11) 
                    }}>Continuer</button>
                </div>
            }
        </div>
    )
};

export default Entry9