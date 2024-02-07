import { useState } from "react"
import { StrengthCheckerType } from "../types"

export default function GenerateBtn({strength}: StrengthCheckerType) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numbers = '1234567890'
    const symbols = '!@#$%^&*()_+][{}?><'

    const [pass, setPass] = useState('')

    const handleGenerate = () => {
        let generatedPassword = '';

        if (strength.indexOf('numbers') !== -1) {
            generatedPassword += numbers;
        }
        if (strength.indexOf('uppercase') !== -1) {
            generatedPassword += upperCase;
        }
        if (strength.indexOf("lowercase") !== -1) {
            generatedPassword += lowerCase;
        }
        if (strength.indexOf('symbols') !== -1) {
            generatedPassword += symbols;
        }

        // Ensure uniqueness of characters in the generated password
        const uniquePassword = Array.from(new Set(generatedPassword)).join('');

        setPass(uniquePassword);
    };

    console.log(pass);

  return (
    <section className="group  mt-4">
        <button onClick={handleGenerate} className="w-full flex justify-center items-center gap-2 py-5 bg-[var(--neon-green)] border-2 group-hover:bg-[var(--dark-gray)] group-hover:border-[var(--neon-green)] duration-200">
            <h2 className="text-[var(--dark-gray)] font-bold text-base  group-hover:text-[var(--neon-green)] ">Generate</h2>
            <svg className="group-hover:fill-[var(--neon-green)] fill-[var(--dark-gray)]"  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
             <path d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z" />
            </svg>
        </button>
    </section>
  )
}
