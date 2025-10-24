import sliderimg1 from "../assets/HeroBaby-1.png";
import sliderimg2 from "../assets/heroBaby2.jpg";
import sliderimg3 from "../assets/HeroBaby3.jpg";


const sliderImages = [
  { id: "item1", src: sliderimg1, num: 1 },
  { id: "item2", src: sliderimg2, num: 2 },
  { id: "item3", src: sliderimg3, num: 3 },

];

export default function Slider() {
  return (
    <>
      <div className="carousel w-full h-{16rem}">
        
        {sliderImages.map((item) => (
          <div key={item.id} id={item.id} className="carousel-item w-full">
            <img
              src={item.src} 
              className="w-full"
              alt={`Slider image ${item.num}`} 
            />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {sliderImages.map((item) => (
          <a key={item.num} href={`#${item.id}`} className="btn btn-xs">
            {item.num}
          </a>
        ))}
      </div>
    </>
  );
}