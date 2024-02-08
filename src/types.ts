
export type CheckBoxType = {
    text: string;
    name: string;
    setStrength: React.Dispatch<React.SetStateAction<string[]>>
    id: string;
}

export type StrengthCheckerType = {
    strength: string[]
}

export type GeneratePasswordType = {
    strength: string[]
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    passLength: number;
}

export type OutputType = {
    password: string;
}

export type BoxType = {
    // password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export type LengthType = {
    passLength: number;
    setPassLength: React.Dispatch<React.SetStateAction<number>>;
}