import "./photocarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import photo1 from "../../img/imagem1.jpg";
import photo2 from "../../img/imagem2.jpg";
import photo3 from "../../img/imagem3.jpg";
import photo4 from "../../img/imagem4.jpg";
import photo5 from "../../img/imagem5.jpg"

const images = [photo1, photo2, photo3, photo4, photo5];

const PhotoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="photo-carousel">
      <Slider {...settings}>
        {images.map((img, index) => (
          <img key={index} src={img} alt="Memória" />
        ))}
      </Slider>
    </div>
  );
};

export default PhotoCarousel;