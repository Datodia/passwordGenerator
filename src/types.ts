
export type CheckBoxType = {
    text: string;
    name: string;
    setStrength: React.Dispatch<React.SetStateAction<string[]>>
    id: string;
}

export type StrengthCheckerType = {
    strength: string[]
}