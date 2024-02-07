import { useState } from "react";
import Checkbox from "./Checkbox";
import StrengthChecker from "./StrengthChecker";
import GenerateBtn from "./GenerateBtn";

export default function Box() {

    const [strength, setStrength] = useState<string[]>([])
    const [passLength, setPassLength] = useState(10)

    console.log(strength, "stength")
    
  return (
    <div className="mt-4 p-4 bg-[var(--dark-gray)] ">
        <section className="flex justify-between items-center">
            <h2 className="text-[var(--almost-white)] text-base font-bold">Characters Length</h2>
            <h2 className="text-[var(--neon-green)] text-2xl font-bold" >{passLength}</h2>
        </section>
        <section className="mt-2 mb-4">
            <input 
                onChange={(e) => setPassLength(Number(e.target.value))} 
                value={passLength} 
                className="w-full  accent-[var(--neon-green)]" 
                type="range" 
                min={1} 
                max={20} 
            />
        </section>
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
            strength={strength}
        />
    </div>
  )
}
