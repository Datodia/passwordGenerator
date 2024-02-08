import { useState } from "react";
import Checkbox from "./Checkbox";
import StrengthChecker from "./StrengthChecker";
import GenerateBtn from "./GenerateBtn";
import { BoxType } from "../types";
import LengthsGenerator from "./LengthsGenerator";

export default function Box({setPassword}: BoxType) {

    const [strength, setStrength] = useState<string[]>([])
    const [passLength, setPassLength] = useState(12)

  return (
    <div className="mt-4 p-4 bg-[var(--dark-gray)] md:px-8 md:py-8 ">
        <LengthsGenerator
            passLength={passLength}
            setPassLength={setPassLength}
        />
        <Checkbox 
            text={'Include Uppercase Letters'}
            name={'uppercase'}
            setStrength={setStrength}
            id={'uppercase-letter'}
        />
        <Checkbox 
            text={'Include Lowercase Letters'}
            name={'lowercase'}
            setStrength={setStrength}
            id={'lowercase-letter'}
        />
        <Checkbox 
            text={'Include Numbers'}
            name={'numbers'}
            setStrength={setStrength}
            id={'numbers'}
        />
        <Checkbox 
            text={'Include Symbols'}
            name={'symbols'}
            setStrength={setStrength}
            id={'symbols'}
        />

        <StrengthChecker
            strength={strength}
        />
        <GenerateBtn
            passLength={passLength}
            strength={strength}
            setPassword={setPassword}
        />
    </div>
  )
}
