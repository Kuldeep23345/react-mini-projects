import "./App.css";

import { useEffect, useCallback, useState, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //use ref

  return (
    <div className="w-full h-screen bg-black flex justify-center pt-10">
      <div className="container w-110 h-25 p-3 bg-gray-700 rounded-sm">
        <div className="top-part  h-10 ">
          <input
            className="w-[80%] h-full bg-white text-orange-400 rounded-l-sm border-0 outline-0 pl-1 pr-1"
            readOnly
            type="text"
            value={password}
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 h-full w-[20%] rounded-r-sm border-0"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="bottom-part mt-3 flex gap-2 text-orange-400 ">
          <input
            className="cursor-pointer"
            type="range"
            id="range-input"
            min={6}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="range-input">Length:{length}</label>
          <input
            type="checkbox"
            id="number-input"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="number-input">Number</label>
          <input
            type="checkbox"
            id="char-input"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="char-input">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default App;
