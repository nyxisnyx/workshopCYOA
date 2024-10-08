import { createContext, useState } from "react"

export const CharacterStats = createContext(null)
export const CharacterClass = createContext(null)
export const CharacterTempHP = createContext(null)
export const CharacterInventory = createContext(null)
export const StoryProgression = createContext(null)

export const MyProvider = ({children}) => {
    const [characterStats, setCharacterStats] = useState({
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        AC: 10,
        HP: 10,
    });
    const [characterClass, setCharacterClass] = useState('human warrior')
    const [characterTempHP, setCharacterTempHP] = useState(10)
    const [characterInventory, setCharacterInventory] = useState([])
    const [storyIndex, setStoryIndex] = useState(0)


    const characterStatsValue = {characterStats, setCharacterStats};
    const characterClassValue = {characterClass, setCharacterClass};
    const characterTempHPValue = {characterTempHP, setCharacterTempHP};
    const characterInventoryValue = {characterInventory, setCharacterInventory};
    const storyProgressionValue = {storyIndex, setStoryIndex};

    return (
        <StoryProgression.Provider value={storyProgressionValue}>
            <CharacterClass.Provider value={characterClassValue}>
                <CharacterStats.Provider value={characterStatsValue}>
                    <CharacterTempHP.Provider value={characterTempHPValue}>
                        <CharacterInventory.Provider value={characterInventoryValue}>
                            {children}
                        </CharacterInventory.Provider>
                    </CharacterTempHP.Provider>
                </CharacterStats.Provider>
            </CharacterClass.Provider>
        </StoryProgression.Provider>
    )
}

export default MyProvider