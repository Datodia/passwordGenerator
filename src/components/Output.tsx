import { useState } from "react";
import { OutputType } from "../types";

export default function Output({password}: OutputType) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopied = () => {
    navigator.clipboard.writeText(password)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <section className="mt-4 w-full p-4 bg-[var(--dark-gray)] flex justify-between md:px-8 md:py-5">
        <h1 className="text-xl text-[var(--almost-white)] md:text-3xl">{password}</h1>
        <div className="flex items-center gap-2">
          {isCopied ? <h2 className="text-[var(--neon-green)] text-xs font-bold md:text-xl">COPIED</h2> : null}
          <button onClick={handleCopied}><img src="/assets/copy.svg" alt="" /></button>
        </div>
    </section>  
  )
}
