import GradientText from "../components/GradientText";

export default function ReservePage() {
  return (
    <>
      <div className="md:flex md:justify-between items-center align-middle h-[90vh] w-full text-center md:text-left bg-cover bg-center bg-[url('/public/images/rezervuoti.png')]">
        <div className="absolute top-56 md:top-80 bg-white/50 backdrop-blur w-full p-6 md:p-10 flex justify-center">
          <div className="max-w-[1400px] flex flex-col justify-center items-center gap-2">
            <h3 className="font-bold text-xl md:text-4xl text-black">
              Atnaujinkite savo automobilį - rezervuokite laiką dabar!
            </h3>
            <a
              href="tel:+37065557607"
              className="my-4 border rounded-full p-3 pt-5 md:p-4 md:pt-6 px-6 md:px-8 border-neutral-500"
            >
              <GradientText
                type="h4"
                extraStyles="font-semibold text-3xl md:text-6xl hover:text-blue-700 duration-150 hover:cursor-pointer"
              >
                +370 655 57607
              </GradientText>
            </a>
            <p className="font-semibold text-xl text-neutral-800 max-w-112">
              Mūsų profesionali komanda pasiruošusi pasirūpinti jūsų transporto
              priemonės švara ir blizgesiu!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
