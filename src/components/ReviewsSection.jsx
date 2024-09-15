import Slider from "react-slick";
import GradientText from "./GradientText";
import { googleReviews, facebookReviews } from "../data/reviews";

export default function ReviewsSection() {
  return (
    <section className="md:flex md:justify-between items-center align-middle w-full text-center md:text-left">
      <div className="bg-white w-full p-10 flex justify-center">
        <div className="max-w-[1400px] w-full">
          <div className="flex justify-center mb-4 md:mb-10">
            <GradientText
              type="h1"
              extraStyles="text-3xl md:text-5xl font-semibold mt-6"
            >
              Atsiliepimai
            </GradientText>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="../../../../images/googlereviews.webp"
              className="h-20 object-contain"
              alt="google reviews"
            />
            <a
              className="border rounded-full p-2 px-5 mt-2"
              target="_blank"
              href="https://www.google.com/maps/place/Auto+Plovykla+Klaip%C4%97doje+AutoMax/@55.715829,21.1462018,17z/data=!4m8!3m7!1s0x46e4db772a6f008d:0xcc3b00144ee4d080!8m2!3d55.715829!4d21.1462018!9m1!1b1!16s%2Fg%2F11tckr96xp?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            >
              Visi Google atsiliepimai
            </a>
            <div className="md:hidden md:absolute w-full">
              <ReviewsCarousel reviews="google" mobile={true} />
            </div>
            <div className="hidden absolute md:block md:static w-full">
              <ReviewsCarousel reviews="google" />
            </div>
            <img
              src="../../../../images/facebookreviews.webp"
              className="h-[4.5rem] object-contain mt-20 md:mt-0"
              alt="facebook reviews"
            />
            <a
              className="border rounded-full p-2 px-5 mt-2"
              target="_blank"
              href="https://www.facebook.com/people/AutoMax/100084943039651/?sk=reviews"
            >
              Visi Facebook atsiliepimai
            </a>
            <div className="md:hidden md:absolute w-full">
              <ReviewsCarousel reviews="facebook" mobile={true} />
            </div>
            <div className="hidden absolute md:static md:block w-full">
              <ReviewsCarousel reviews="facebook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel({ reviews, mobile = false }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: mobile ? 1 : 3,
    slidesToScroll: 1,
  };

  const toMap = reviews === "google" ? googleReviews : facebookReviews;

  return (
    <div className="w-full mt-8 md:mb-20" key={reviews}>
      <Slider {...settings} key={reviews}>
        {toMap.map((r) => (
          <div
            className={`border ${
              reviews !== "google" ? "md:min-h-[19.5rem]" : "md:min-h-[16.5rem]"
            } p-4 md:p-6 rounded-xl`}
            key={`${reviews}-${r.id}`}
          >
            <div className="flex justify-center">
              <img
                src={r.img}
                alt="profile img"
                className={`h-[60px] ${reviews !== "google" && "rounded-full"}`}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <p className="font-semibold text-center mt-2">{r.name}</p>
              <img
                src="../../../../images/5stars.webp"
                alt="5 stars rating"
                className="h-7 object-contain my-1"
              />
              <p className="text-center">{r.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
