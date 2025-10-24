export default function Slider() {
  return (
    <div className="carousel w-full rounded-lg shadow-md">
      <div className="carousel-item relative w-full">
        <img src="https://i.ibb.co/3vX6VfX/slide1.jpg" className="w-full object-cover h-64" alt="slide1" />
      </div>
      <div className="carousel-item relative w-full">
        <img src="https://i.ibb.co/7Y7f6H9/slide2.jpg" className="w-full object-cover h-64" alt="slide2" />
      </div>
      <div className="carousel-item relative w-full">
        <img src="https://i.ibb.co/s6b2K1M/slide3.jpg" className="w-full object-cover h-64" alt="slide3" />
      </div>
    </div>
  );
}
