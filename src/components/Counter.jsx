import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);


  return (
    <>
      <div className="w-screen h-screen bg-black flex flex-col justify-center items-center">
        <h1 className="text-[#cbd5e1] text-8xl ">{counter}</h1>

        <div className="mt-8 flex gap-x-24">
          <button
            onClick={decrement}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-emerald-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#cbd5e1] border-2 border-black group-hover:bg-emerald-700"></span>
            <span className="relative text-black group-hover:text-white">
              -
            </span>
          </button>
          <button
            onClick={reset}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-emerald-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#cbd5e1] border-2 border-black group-hover:bg-emerald-700"></span>
            <span className="relative text-black group-hover:text-white">
              reset
            </span>
          </button>
          <button
            onClick={increment}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-emerald-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-[#cbd5e1] border-2 border-black group-hover:bg-emerald-700"></span>
            <span className="relative text-black group-hover:text-white">
              +
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
