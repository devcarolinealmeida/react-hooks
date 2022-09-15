import { useState, useRef } from "react";

const ExempleUseRef = () => {
  const [name, setName] = useState("");

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <section className="border border-slate-500 rounded p-2">
      <div className="my-4 flex flex-col text-center items-center justify-between h-full">
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <p className="my-1">Hello, my name is {name}</p>
        <button className="p-2 bg-slate-500 text-white rounded hover:bg-slate-800" onClick={focusInput}>Focus input</button>
      </div>
    </section>
  );
};

export default ExempleUseRef;

// useRef
// O useRef te permite:
// - Acessar um elemento do DOM.
// - Armazenar um valor imutável durante o ciclo de vida do componente.
// - Seu valor é acessado por .current
// - Podemos usar para pegar a referência do elemento html e acessar propriedades do elemento
// - Podemos pegar o valor anterior de um state e guardar em algum lugar
