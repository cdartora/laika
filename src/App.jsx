import LaikaLogo from "./assets/laika-logo.svg";
import { useState } from "react";
import { EnvelopeSimple, Clipboard } from "@phosphor-icons/react";

function App() {
  const [isClipboardSolid, setIsClipboardSolid] = useState(false);
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });

  const mouseInside = () => {
    setIsClipboardSolid(true);
  };

  const mouseOutside = () => {
    setIsClipboardSolid(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("laikaprodutora@gmail.com");
  };

  const trailEffect = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ left: clientX, top: clientY });
  };

  return (
    <>
      <div
        className="page h-screen p-4 min-w-[350px]"
        onMouseMove={trailEffect}
      >
        <div className="content max-w-md h-full flex-col mx-auto">
          <div className="flex flex-col items-center mb-10 cursor-zoom-in">
            <img
              src={LaikaLogo}
              alt="Logo da produtora Laika. Laika por extenso e estilizado."
              className="w-44 mt-4 mx-4"
            />
            <div className="sub-title text-center text-sm underline underline-offset-2">
              <p>luta artística independente & koletivo autoral</p>
            </div>
          </div>
          <div className="contato">
            <p className="mb-4">
              Procuramos projetos e oportunidades para movimentar a cidade.
            </p>
            <h3 className="font-bold">Entre em contato:</h3>
            <div className="e-mail-button-container flex gap-3 border-2 border-black justify-between p-1 overflow-x-auto">
              <div className="flex gap-1">
                <EnvelopeSimple size={32} />
                <span>laikaprodutora@gmail.com</span>
              </div>
              <div>
                <Clipboard
                  size={32}
                  weight={isClipboardSolid ? "regular" : "fill"}
                  className="cursor-pointer"
                  onMouseEnter={mouseInside}
                  onMouseLeave={mouseOutside}
                  onClick={copyToClipboard}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer text-xs flex justify-center">
          feito com carinho, Laika. 2023
        </div>
        {/* <div
          style={{ left: mousePosition.left, top: mousePosition.top }}
          id="blob"
          onMouseMove={trailEffect}
        ></div> */}
      </div>
    </>
  );
}

export default App;
