import MainContactDetails from "../components/MainContactDetails";

export default function ContactsPage() {
  return (
    <div className="md:flex md:justify-between items-center align-middle pt-40 w-full mb-28 text-center md:text-left">
      <div className="bg-white/50 backdrop-blur w-full p-10 flex justify-center">
        <div className="max-w-[1100px] w-full flex justify-center">
          <div className="w-full flex flex-col items-center">
            <div>
              <h1 className="font-semibold text-3xl md:text-5xl mb-6">
                Kyla klausimų?
                <br />
                Susisiekite su mumis!
              </h1>

              <div className="md:hidden md:absolute w-full">
                <MainContactDetails center={true} />
              </div>
              <div className="hidden absolute md:block md:static w-full">
                <MainContactDetails big={true} />
              </div>
            </div>
          </div>

          {/* <form className="flex flex-col w-full gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullname" className="font-semibold text-lg">
                Vardas, pavardė{" "}
                <span className="text-lBlue" title="privaloma">
                  *
                </span>
              </label>
              <input
                required
                id="fullname"
                type="text"
                placeholder="Jūsų vardas ir pavardė..."
                className="focus:outline-none bg-neutral-100 p-3 rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-lg">
                El. paštas{" "}
                <span className="text-lBlue" title="privaloma">
                  *
                </span>
              </label>
              <input
                required
                id="email"
                type="email"
                placeholder="Jūsų el. paštas..."
                className="focus:outline-none bg-neutral-100 p-3 rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="msg" className="font-semibold text-lg">
                Jūsų žinutė{" "}
                <span className="text-lBlue" title="privaloma">
                  *
                </span>
              </label>
              <textarea
                required
                id="msg"
                type="text"
                placeholder="Rašykite žinutę čia..."
                className="focus:outline-none bg-neutral-100 p-3 rounded h-32"
              />
            </div>
            <button className="p-3 rounded bg-lBlue text-white font-semibold text-lg hover:bg-transparent hover:text-black border-lBlue border-[3px] duration-150 mt-2">
              Siųsti
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
