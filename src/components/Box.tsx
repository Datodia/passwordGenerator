import { useState } from "react";
import Checkbox from "./Checkbox";
import StrengthChecker from "./StrengthChecker";
import GenerateBtn from "./GenerateBtn";
import { BoxType } from "../types";
import LengthsGenerator from "./LengthsGenerator";
import { checkboxes } from "./checkboxs";

export default function Box({setPassword}: BoxType) {

    const [strength, setStrength] = useState<string[]>(['uppercase'])
    const [passLength, setPassLength] = useState(12)

  return (
    <div className="mt-4 p-4 bg-[var(--dark-gray)] md:px-8 md:py-8 ">
        <LengthsGenerator
            passLength={passLength}
            setPassLength={setPassLength}
        />
        {
            checkboxes.map(el => (
                <Checkbox
                    text={el.text}
                    id={el.id}
                    name={el.name}
                    setStrength={setStrength}
                    defaultChecked={el.defaultChecked}
                />
            ))
        }
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
