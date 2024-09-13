import MainContactDetails from "./MainContactDetails";

export default function ContactsFooter() {
  return (
    <footer className="flex justify-center px-6 gap-16 md:gap-32 pb-12 md:pb-20 pt-20 text-center bg-neutral-100">
      <div className="max-w-[1400px] w-full md:flex grid grid-cols-1 gap-16">
        <div className="w-full">
          <h3 className="font-bold text-3xl mb-2">Darbo laikas</h3>
          <p className="text-neutral-500 text-lg">
            Darbo dienomis{" "}
            <span className="text-black font-semibold ml-1">8:00 - 18:00</span>
          </p>
          <p className="text-neutral-500 text-lg">Savaitgaliais nedirbame</p>
        </div>
        <div className="w-full">
          <h3 className="font-bold text-3xl mb-2">Kontaktai</h3>
          <p className="text-neutral-500 text-lg mb-6">
            Mielai atsakysime į visus jūsų klausimus
          </p>
          <MainContactDetails center={true} />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-3xl mb-2">Naujienos</h3>
          <p className="text-neutral-500 text-lg mb-6">
            Sekite naujienas mūsų Facebook puslapyje
          </p>
          <div className={`flex justify-center items-center gap-3 mb-2`}>
            <img
              src="../../../../images/facebookicon.png"
              className="h-5"
              alt="tel."
            />
            <a
              href="https://www.facebook.com/people/AutoMax/100084943039651"
              target="_blank"
            >
              <h4 className="font-semibold text-lg duration-150 hover:cursor-pointer hover:text-lBlue">
                AutoMax
              </h4>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
