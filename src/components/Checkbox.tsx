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
        <section className="mt-4 flex gap-5 ">
            <input onChange={handleChange} className="w-4 accent-[var(--neon-green)]" type="checkbox" id={id} />
            <label className="text-base text-[var(--almost-white)] " htmlFor={id}>{text}</label>
        </section>
    </>
  )
}
