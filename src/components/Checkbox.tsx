import { CheckBoxType } from "../types";

export default function Checkbox({name, text, setStrength, id}: CheckBoxType) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setStrength((prev) => [...prev, name]);
        } else {
            setStrength((prev) => prev.filter((item) => item !== name));
        }
    };
  return (
    <>
        <section className="mt-4 flex gap-5 md:mt-5 md:gap-6">
            <input onChange={handleChange} className="w-4 bg-black accent-[var(--neon-green)] md:w-5 md:accent-slate-400]" type="checkbox" id={id} />
            <label className="text-base text-[var(--almost-white)] md:text-lg " htmlFor={id}>{text}</label>
        </section>
    </>
  )
}
