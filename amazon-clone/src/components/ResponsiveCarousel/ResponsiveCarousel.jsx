// src/components/ResponsiveCarousel/ResponsiveCarousel.jsx
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Import local images
import image1 from "../../images/image1.jpg"; // Adjust the image paths as needed
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";

const ResponsiveCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={true}
        showIndicators={false}
        infiniteLoop={false}
        autoPlay={true}
        interval={3000} // Time between slides
        transitionTime={500} // Transition time
      >
        <div>
          <img src={image1} alt="Product 1" />
          <p className="legend"></p> {}
        </div>
        <div>
          <img src={image2} alt="Product 2" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={image3} alt="Product 3" />
          <p className="legend"></p>
        </div>
        <div>
          <img src={image4} alt="Product 4" />
          <p className="legend"></p>
        </div>
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
