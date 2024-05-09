
"use client"
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slides = [
    {
      id: 0,
      img: '/myntra1.jpg',
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$15"
    },
    {
      id: 1,
      img: "/myntra2.jpg",
      title: "Trending Accessories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$10"
    },
    {
      id: 2,
      img: "/myntra3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$50"
    }
  ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slides.map((item) => (
            <><Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price} /></>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
