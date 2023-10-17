import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen"
      style={{backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("tomato")} style={{backgroundColor: "tomato"}}>Red</button>
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("seagreen")} style={{backgroundColor: "seagreen"}}>Green</button>
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("darkviolet")} style={{backgroundColor: "darkviolet"}}>Violet</button>
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("steelblue")} style={{backgroundColor: "steelblue"}}>Blue</button>
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("deeppink")} style={{backgroundColor: "deeppink"}}>Pink</button>
            <button className="outline-none shadow-lg px-3 py-1 text-white rounded-full font-bold" onClick={() => setColor("darkorange")} style={{backgroundColor: "darkorange"}}>orange</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
