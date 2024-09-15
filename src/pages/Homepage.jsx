import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ServicesSection from "../components/ServicesSection";
import MapSection from "../components/MapSection";
import ReviewsSection from "../components/ReviewsSection";

export default function Homepage() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <MapSection />
        <div className="mb-16 md:mb-0">
          <ReviewsSection />
        </div>
      </main>
    </>
  );
}

function Hero() {
  return (
    <>
      <div className="md:flex md:justify-between items-center align-middle pt-40 md:pt-72 w-full mb-32 md:mb-64 text-center md:text-left">
        <header className="bg-white/50 backdrop-blur w-full p-6 md:p-10 flex justify-center">
          <div className="max-w-[1400px] flex flex-col items-center">
            <h3 className="font-bold text-xl md:text-4xl mb-4 md:mb-2 text-black">
              Atnaujinkite savo automobilį rinkdamiesi AutoMax
            </h3>
            <h2 className="font-bold text-4xl md:text-6xl mb-6 text-black">
              <span className="text-blue-950">Kokybė, profesionalumas</span> -
              mūsų moto
            </h2>
            <h1 className="font-semibold md:text-xl text-neutral-800 max-w-112 mb-12">
              Automobilių švaros centras pačioje Klaipėdos miesto širdyje
            </h1>
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
              <Link to="/rezervuoti">
                <button className="justify-center w-full font-bold text-xl bg-lBlue text-white p-3 rounded px-6 hover:-translate-y-1 border-lBlue border-2 duration-200 reserve-shadow flex gap-2 items-center">
                  Rezervuoti
                  <img
                    src="../../../../images/checkmark.webp"
                    className="h-6"
                    alt="check"
                  />
                </button>
              </Link>
              <Link to="paslaugos">
                <button className="justify-center w-full font-bold text-xl bg-black text-white p-3 rounded px-6 hover:-translate-y-1 hover:bg-transparent hover:text-black border-black border-2 duration-200 flex gap-2 items-center">
                  Paslaugos
                </button>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
