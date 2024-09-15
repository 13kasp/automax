import { useState } from "react";
import GradientText from "../components/GradientText";

import { pagrindines, papildomos } from "../data/kainos";

export default function PricesPage() {
  const [option, setOption] = useState("0");

  return (
    <section className="md:flex md:justify-between items-center align-middle pt-16 md:pt-28 w-full md:mb-20 text-center md:text-left">
      <div className="bg-white/50 backdrop-blur w-full p-10 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="flex justify-center">
            <GradientText
              type="h1"
              extraStyles="text-3xl md:text-5xl font-semibold"
            >
              Pagrindinės paslaugos
            </GradientText>
          </div>
          <div className="flex flex-col md:flex-row justify-center my-8 md:my-12 gap-12 mb-20 w-full">
            <div className="flex flex-col border p-2 h-fit gap-2 whitespace-nowrap">
              <span className="p-2 font-semibold">Automobilio tipas</span>
              <select
                value={option}
                className="p-2 border focus:outline-none"
                onChange={(e) => {
                  setOption(e.target.value);
                }}
              >
                <option value="0">Lengvasis automobilis</option>
                <option value="1">Visureigis minivenas</option>
                <option value="2">Mikroautobusas</option>
              </select>
            </div>
            <table>
              <thead>
                <tr>
                  <th className="border p-2">Paslauga</th>
                  <th className="border p-2">Mokestis</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(pagrindines).map((key) => (
                  <tr key={key}>
                    <td className="border p-2">
                      {key.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </td>
                    <td className="border p-2">
                      {option === "0" && pagrindines[key][0]}
                      {option === "1" && pagrindines[key][1]}
                      {option === "2" && pagrindines[key][2]} EUR
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <GradientText
              type="h1"
              extraStyles="text-3xl md:text-5xl font-semibold"
            >
              Papildomos paslaugos
            </GradientText>
          </div>
          <div className="flex justify-center my-8 md:my-12 mb-0 md:mb-20 w-full">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="border p-2">Paslauga</th>
                  <th className="border p-2">Mokestis</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(papildomos).map((key) => (
                  <tr key={key}>
                    <td className="border p-2">
                      {key.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </td>
                    <td className="border p-2">{papildomos[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
