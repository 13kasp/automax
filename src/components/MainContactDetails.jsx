export default function MainContactDetails({ center = false, big = false }) {
  return (
    <div>
      <div
        className={`flex items-center gap-3 mb-2 ${
          center ? "justify-center" : ""
        }`}
      >
        <img
          src="../../../../images/phone.webp"
          className={`${big ? "h-6" : "h-5"}`}
          alt="tel."
        />
        <a href="tel:+37065557607">
          <h4
            className={`font-semibold hover:text-lBlue duration-150 hover:cursor-pointer ${
              big ? "text-2xl" : "text-lg"
            }`}
          >
            +370 655 57607
          </h4>
        </a>
      </div>
      <div
        className={`flex items-center gap-3 mb-2 ${
          center ? "justify-center" : ""
        }`}
      >
        <img
          src="../../../../images/mail.webp"
          className={`${big ? "h-6" : "h-5"}`}
          alt="email"
        />
        <a href="mailto:automaxliepu54@gmail.com">
          <h4
            className={`font-semibold hover:text-lBlue duration-150 hover:cursor-pointer ${
              big ? "text-2xl" : "text-lg"
            }`}
          >
            automaxliepu54@gmail.com
          </h4>
        </a>
      </div>
      <div
        className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        <img
          src="../../../../images/mapblack.webp"
          className={`${big ? "h-6" : "h-5"}`}
          alt="map"
        />
        <a href="https://maps.app.goo.gl/rCVotPsRr5TuX5oL6" target="_blank">
          <h4
            className={`font-semibold hover:text-lBlue duration-150 hover:cursor-pointer ${
              big ? "text-2xl" : "text-lg"
            }`}
          >
            Liepų g. 54b Klaipėda
          </h4>
        </a>
      </div>
    </div>
  );
}
