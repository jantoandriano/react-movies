import AliceCarousel from "react-alice-carousel";
import { useNavigate } from "react-router-dom";

import "react-alice-carousel/lib/alice-carousel.css";
import {
  CarouselWrapper,
  CarouselBody,
  CarouselButton,
} from "./Carousel.styles";
import { CAROUSEL_IMG_URL } from "../../config/config";

const Carousel = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}/`);
  };

  const items = data.map((item) => (
    <CarouselWrapper
      key={item.id}
      url={`url( ${CAROUSEL_IMG_URL}${item.backdrop_path})`}
    >
      <CarouselBody>
        <h3>{item.title || item.name}</h3>
        <p>{item.overview}</p>
        <CarouselButton onClick={() => handleClick(item.id)}>
          <span>LEARN MORE</span>
        </CarouselButton>
      </CarouselBody>
    </CarouselWrapper>
  ));

  return (
    <AliceCarousel
      infinite
      autoPlay
      disableButtonsControls
      disableDotsControls
      mouseTracking
      items={items}
    />
  );
};

export default Carousel;
