import { useEffect, useState } from "react";
import { StrengthCheckerType } from "../types";

export default function StrengthChecker({strength}: StrengthCheckerType) {
    const [text, setText] = useState('Too Weak')
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        if(strength.length < 2){
            setText("Too Weak")
            setImgUrl('/assets/tooweak.png')
        }else if(strength.length < 3){
            setText('Weak')
            setImgUrl('/assets/weak.png')
        }else if(strength.length < 4){
            setText('Medium')
            setImgUrl('/assets/medium.png')
        }else{
            setText('Strong')
            setImgUrl('/assets/strong.png')
        }
    }, [strength])
    
  return (
    <section className="mt-7 p-4 bg-[var(--very-dark-gray)] flex justify-between">
        <h2 className="text-[var(--gray)] text-base font-bold">STRENGTH</h2>
        <div className="flex gap-2">
            <h2 className="text-[var(--almost-white)] text-base font-bold">{text}</h2>
            <img className="w-10" src={imgUrl} alt="" />
        </div>
    </section>
  )
}
