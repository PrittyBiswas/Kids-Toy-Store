import sliderimg1 from "../assets/HeroBaby-1.png";
import sliderimg2 from "../assets/heroBaby2.jpg";
import sliderimg3 from "../assets/HeroBaby3.jpg";

const sliderData = [
  {
    id: "item1",
    src: sliderimg1,
    num: 1,
    headline: "Designed with Love, Built for Little Ones.",
    paragraph: "Every item in our collection is hand-picked for safety, quality, and comfort, ensuring your baby gets the best start possible.",
    buttonText: "Shop Now",
  },
  {
    id: "item2",
    src: sliderimg2,
    num: 2,
    headline: "Tiny Treasures for Your Little Bundle of Joy.",
    paragraph: "Discover a curated world of essentials, from snuggly clothes to stimulating toys, all crafted to support every magical milestone.",
    buttonText: "See Collections",
  },
  {
    id: "item3",
    src: sliderimg3,
    num: 3,
    headline: "Your Trusted Partner in the Parenting Journey.",
    paragraph: "We're here to help you navigate parenthood with ease, offering expert advice and dependable products you can truly trust.",
  },
];

export default function Slider() {
  return (
    <>
      <div className="carousel w-full">
        {sliderData.map((item) => (
          <div key={item.id} id={item.id} className="carousel-item w-full">

            <div className="w-full h-80 overflow-hidden relative flex items-center justify-center">
              <img
                src={item.src}
                className="w-full h-full object-cover"
                alt={`Hero slide ${item.num}`}
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center ">

                <h2 className="text-2xl md:text-3xl font-extrabold text-pink-700 text-center drop-shadow-md mb-2">
                  {item.headline}
                </h2>

                <p className="text-sm md:text-base text-white text-center max-w-xl px-4 drop-shadow-md mb-6">
                  {item.paragraph}
                </p>

                {item.buttonText && (
                  <button
                    className="btn btn-primary bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded border-none px-8 text-lg font-bold"
                  >
                    {item.buttonText}
                  </button>
                )}

              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 ">
        {sliderData.map((item) => (
          <a key={item.num} href={`#${item.id}`} className="btn btn-xs">
            {item.num}
          </a>
        ))}
      </div>
    </>
  );
}