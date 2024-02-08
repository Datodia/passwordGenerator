import { LengthType } from "../types";

export default function LengthsGenerator({passLength, setPassLength}: LengthType) {
  return (
    <>
        <section className="flex justify-between items-center">
            <h2 className="text-[var(--almost-white)] text-base font-bold md:text-lg">Characters Length</h2>
            <h2 className="text-[var(--neon-green)] text-2xl font-bold md:text-3xl" >{passLength}</h2>
        </section>
        <section className="mt-2 mb-4 md:mt-6">
            <input 
                onChange={(e) => setPassLength(Number(e.target.value))} 
                value={passLength} 
                className="w-full  accent-[var(--neon-green)]" 
                type="range" 
                min={4} 
                max={20} 
            />
        </section>
    </>
  )
}
