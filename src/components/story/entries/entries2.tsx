import { useContext, useState } from "react";
import { CharacterStats, StoryProgression } from "../../../context/myProvider";

export const Entry2 = () => {
    const {setStoryIndex} = useContext(StoryProgression);
    const {characterStats} = useContext(CharacterStats);

    const [resultString, setResultString] = useState('')
    const [result, setResult] = useState(false)
    const jetDex = () => {
        let dexModifier = characterStats.dexterity
        console.log(dexModifier);
        let dexRoll = Math.floor(Math.random() * 6 + 1 + dexModifier);

        const passFail = dexRoll >= 4 ? true : false;

        setResultString(`Tu as obtenu ${dexRoll} à ton jet de dextérité. Tu as ${passFail? 'réussi' : 'échoué'}.`)
        setResult(passFail)
    }

    return (
        <div id="2">
            <p className="storyEntry">Clique sur le bouton pour effectuer un jet de dextérité (difficulté 4)</p>
            <button onClick={jetDex}>Jet de dextérité</button>
            {
                resultString && <div className="rollResult">
                    {resultString} <br />
                    <button onClick={() => {
                        result ? setStoryIndex(4) : setStoryIndex(5) 
                    }}>Continuer</button>
                </div>
            }
        </div>
    )
};

export default Entry2