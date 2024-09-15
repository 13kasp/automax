import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import GradientText from "./GradientText";

export default function MapSection() {
  return (
    <section className="md:flex md:justify-between items-center align-middle w-full text-center md:text-left">
      <div className="bg-white w-full p-6 md:p-10 pb-0 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="flex flex-col items-center md:mb-10">
            <GradientText
              type="h1"
              extraStyles="text-3xl md:text-5xl font-semibold mt-6"
            >
              Mus rasite
            </GradientText>

            <a
              href="https://maps.app.goo.gl/rCVotPsRr5TuX5oL6"
              target="_blank"
              className="border p-2 mb-4 md:mb-14 rounded-full px-8"
            >
              <div className="flex gap-4 items-center align-middle text-xl md:text-2xl ">
                Liepų g. 54b Klaipėda
                <img
                  src="../../../../images/gmapslogo.webp"
                  className="h-8 md:h-10 align-middle"
                />
              </div>
            </a>

            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}

function Map() {
  return (
    <MapContainer
      center={[55.715571, 21.146443]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[26rem] md:h-[36rem] w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.715571, 21.146443]}>
        <Popup>
          <span className="text-lBlue font-semibold mr-0.5">AutoMax</span>{" "}
          švaros centras
        </Popup>
      </Marker>
    </MapContainer>
  );
}
