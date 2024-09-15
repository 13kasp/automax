import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext";

export default function ServicesSection() {
  return (
    <section className="md:flex md:justify-between items-center align-middle w-full text-center md:text-left">
      <div className="bg-white w-full p-6 md:p-10 flex justify-center">
        <div className="md:max-w-[1400px] md:w-full">
          <div className="flex justify-center md:mb-10">
            <h2 className="text-3xl md:text-5xl font-semibold mt-6 text-lBlue">
              Mūsų paslaugos
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 md:gap-14">
            <ServiceDisplay
              title="Automobilio plovimas"
              img="../../../../images/plovimas.webp"
              list={[
                "Kėbulo plovimas rankomis",
                "Vaškavimas užtikrinantis ilgesnę švarą",
                "Maksimalus nusausinimas",
                "Kruopštus visų tarpelių išpūtinėjimas",
                "Profesionalios priemonės",
              ]}
              modalimg="1"
            >
              Mūsų automobilių švaros centras pasiruošęs pasirūpinti jūsų
              transporto priemonės švara ir blizgesiu! Profesionali komanda
              užtikrins aukščiausios kokybės kėbulo plovimą.
              <br />
              <br />
              Atidėliojate plovimą, nes neturite tam laiko? Galime paimti jūsų
              automobilį iš norimos lokacijos, nuplauti kėbulą ir grąžinti
              atgal! Turime draudimą iki 50 000€, tad drąsiai patikėkite mums
              savo automobilį.
              <br />
              <br />
              Kada paskutinį kartą plovėte savo automobilį? Nepamenate? Vadinasi
              - jau laikas!
            </ServiceDisplay>
            <ServiceDisplay
              title="Salono valymas"
              img="../../../../images/valymas.webp"
              list={[
                "Išskirtinė švara ir blizgesys",
                "Atnaujinta salono spalva",
                "Sumažintas bakterijų, ligų ar alergijų sukėlėjų kiekis",
                "Panaikintas nepageidaujamas kvapas",
              ]}
              modalimg="2"
              modaltext=""
            >
              Ar jūsų automobilio salonas atrodo pavargęs ir reikalauja
              atnaujinimo? Turime sprendimą! Atvarykite mums savo automobilį ir
              cheminis valymas garais suteiks automobiliui išskirtinę švarą!
              Garų pagalba pašaliname nešvarumus ir dėmes, kurias sunku išvalyti
              įprastais metodais. Garas ne tik sunaikina bakterijas, alergenus,
              kvapus, bet ir yra saugus naudoti skirtingiems paviršiams. Taip
              pat atliekame ir sausą automobilio salono valymą.
              <br />
              <br />
              Atidėliojate plovimą, nes neturite tam laiko? Galime paimti jūsų
              automobilį iš norimos lokacijos, nuplauti kėbulą, išvalyti saloną
              ir grąžinti atgal! Turime draudimą iki 50 000€, tad drąsiai
              patikėkite mums savo automobilį.
              <br />
              <br />
              Nesvarbu, salonas odinis ar medžiaginis - rezervuokite laiką ir
              mes pasirūpinsime jūsų automobiliu!
            </ServiceDisplay>
            <ServiceDisplay
              title="Kitos paslaugos"
              img="../../../../images/kitospaslaugos.webp"
              list={[
                "Kėbulo, lempų poliravimas",
                "Langų valymas",
                "Variklio plovimas iš viršaus ir apačios",
                "Padangų juodinimas",
                "Ir kt.",
              ]}
              modalimg="3"
              modaltext=""
            >
              Mes galime atlikti variklio plovimą iš viršaus ir apačios!
              Variklis plaunamas atsargiai ir kruopščiai, o likusius vandens
              lašus tarpeliuose - išpūtinėjame.
              <br />
              <br />
              Sugrąžinkite priekinių automobilio žibintų skaidrumą ir blizgesį!
              Atvarykite savo automobilį mums, o mes atliksime žibintų
              poliravimą, po kurio transporto priemonė atrodys lyg nauja!
              <br />
              <br />
              Purvini ratai ir nublukusios vasarinės padangos iš po praėjusio
              sezono? Galime juos nuplauti ir atnaujinti! Atvežkite ratų
              komplektą ir mes viskuo pasirūpinsime!
            </ServiceDisplay>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceDisplay({ title, list, img, modalimg, children }) {
  const { onModalToggle, onSetModalChildren } = useModal();

  return (
    <div
      className="text-left md:aspect-square h-fit border md:grid flex md:grid-rows-2 flex-col rounded-xl hover:cursor-pointer hover:scale-105 duration-150 overflow-hidden"
      onClick={() => {
        onModalToggle(true);
        onSetModalChildren(
          <ServiceModalChildren
            title={title}
            modalimg={modalimg}
            modaltext={children}
          />
        );
      }}
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt="service"
          className="object-cover md:object-fill h-36 md:h-auto w-full md:w-auto mb-2 md:mb-0"
        />
      </div>
      <div className="p-4 pt-2 md:pt-4">
        <div className="font-semibold text-xl md:text-2xl mb-2 text-center">
          {title} &rarr;
        </div>
        <div>
          <ul className="md:text-lg">
            {list &&
              list.map((l) => (
                <li key={l}>
                  <span className="text-lBlue mr-1">&#10004;</span> {l}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServiceModalChildren({ title, modalimg, modaltext }) {
  const { onModalToggle } = useModal();

  const getBackgroundClass = () => {
    switch (modalimg) {
      case "1":
        return "bg-[url('/public/images/plovimasmodal.webp')]";
      case "2":
        return "bg-[url('/public/images/valymasmodal.webp')]";
      case "3":
        return "bg-[url('/public/images/kitimodal.webp')]";
      default:
        return "bg-white"; // Fallback background
    }
  };

  return (
    <>
      <div
        className={`text-white ${getBackgroundClass()} bg-cover h-52 md:h-80`}
      >
        <div className="p-2 md:p-50 px-4 md:px-8 flex justify-between items-center gap-2 md:gap-4 bg-black/50 backdrop-blur-lg ">
          <div className="text-2xl md:text-4xl font-bold">{title}</div>
          <div>
            <span
              className="text-5xl md:text-6xl hover:cursor-pointer p-0"
              onClick={() => {
                onModalToggle(false);
              }}
            >
              &times;
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 md:p-5 px-5 md:px-8 flex flex-col gap-4 mt-2">
        <div className="md:text-xl max-w-[90%] flex flex-col gap-8 justify-between items-stretch">
          <div>{modaltext}</div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 mb-3 w-full">
          <div
            className="mt-2 inline-block w-full md:w-fit"
            onClick={() => {
              onModalToggle(false);
            }}
          >
            <Link to="rezervuoti">
              <button className="w-full justify-center font-bold text-xl bg-lBlue text-white p-3 rounded-lg px-6 hover:-translate-y-1 hover:bg-transparent hover:text-black border-lBlue border-2 duration-200 flex gap-2 items-center">
                Rezervuoti dabar
              </button>
            </Link>
          </div>
          <div
            className="mt-2 inline-block w-full md:w-fit"
            onClick={() => {
              onModalToggle(false);
            }}
          >
            <Link to="kainos">
              <button className="w-full justify-center font-bold text-xl bg-black text-white p-3 rounded-lg px-6 hover:-translate-y-1 hover:bg-transparent hover:text-black border-black border-2 duration-200 flex gap-2 items-center">
                Kainos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
