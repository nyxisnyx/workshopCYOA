import { useContext, useEffect } from "react";
import { CharacterClass, StoryProgression } from "../../../context/myProvider";
import { CharacterStats } from "../../../context/myProvider";
import { CharacterTempHP } from "../../../context/myProvider";
import { CharacterInventory } from "../../../context/myProvider";

export const Entry0 = () => {
    const {characterClass, setCharacterClass} = useContext(CharacterClass);
    const {setCharacterStats} = useContext(CharacterStats);
    const {setCharacterTempHP} = useContext(CharacterTempHP);
    const {setCharacterInventory} = useContext(CharacterInventory);
    const {setStoryIndex} = useContext(StoryProgression);

    useEffect(() => {
        switch (characterClass) {
            case 'human warrior':
                setCharacterStats(
                    {strength: 3,
                    dexterity: 2,
                    constitution: 2,
                    intelligence: -1,
                    wisdom: 0,
                    charisma: 1,
                    AC: 15,
                    HP: 20,}
                );
                setCharacterTempHP(20);
                setCharacterInventory(['sword', 'chainmail', 'shield'])
                break;

                case 'elf mage':
                setCharacterStats(
                    {strength: -1,
                    dexterity: 0,
                    constitution: 1,
                    intelligence: 3,
                    wisdom: 2,
                    charisma: 2,
                    AC: 13,
                    HP: 15,}
                );
                setCharacterTempHP(15);
                setCharacterInventory(['staff', 'robes', 'healing potion'])
                break;

                case 'halfling rogue':
                setCharacterStats(
                    {strength: 1,
                    dexterity: 3,
                    constitution: 2,
                    intelligence: 0,
                    wisdom: -1,
                    charisma: 2,
                    AC: 14,
                    HP: 17,}
                );
                setCharacterTempHP(17);
                setCharacterInventory(['dagger', 'bow and arrows', 'studded leather armor'])
                break;
        
            default:
                break;
        }
    }, [characterClass])

    return (
        <div id="0">
            Choose your character:
            <select value={characterClass} onChange={(e) => {
                setCharacterClass(e.target.value)
            }}>
                <option value='human warrior'>Human Warrior</option>
                <option value='elf mage'>Elf Mage</option>
                <option value='halfling rogue'>Halfling Rogue</option>
            </select> <br />
            <button onClick={() => {
                setStoryIndex(1)
            }}>Start your adventure!</button>
        </div>
    )
};

export default Entry0