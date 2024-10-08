import { useContext } from "react";
import { CharacterClass } from "../../context/myProvider";
import { CharacterStats } from "../../context/myProvider";
import { CharacterTempHP } from "../../context/myProvider";
import { CharacterInventory } from "../../context/myProvider";

export const CharacterSheet = () => {
    const {characterClass} = useContext(CharacterClass);
    const {characterStats} = useContext(CharacterStats);
    const {characterTempHP} = useContext(CharacterTempHP);
    const {characterInventory} = useContext(CharacterInventory);

    return (
        <div id="characterSheet">
            {characterClass}
            {Object.entries(characterStats).map((el) => {
                return (
                    <div key={el[0]}>
                        {`${el[0]}: ${el[1]}`}
                    </div>
                )
            })}
            {`current HP: ${characterTempHP}`}
            <br />
            {`inventory: ${characterInventory.join(', ')}`}
        </div>
    )
};

export default CharacterSheet