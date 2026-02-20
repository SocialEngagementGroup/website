import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Post from '../Post';
const postData = [
  {
    url: '/blog/blog-details',
    src: 'template/images/post_1.jpeg',
    alt: 'Post',
    date: 'An established personal injury firm operating in a competitive market, where larger competitors were outspending them on ads. Despite having a solid digital foundation, rising ad costs made it harder to consistently show up when potential clients were searching.',
    title: 'The Situation',
  },
  {
    url: '/blog/blog-details',
    src: 'template/images/post_2.jpeg',
    alt: 'Post',
    date: 'Instead of trying to outspend competitors, we expanded visibility beyond paid search reinforcing the firm’s digital footprint, improving organic coverage across key locations, and supporting it with focused, continuously optimized ad campaigns.',
    title: 'What We Did',
  },
  {
    url: '/blog/blog-details',
    src: 'template/images/post_3.jpeg',
    alt: 'Post',
    date: '137 leads in one month 300% Increase in monthly phone calls in one month $30.60 Average Cost Per Call',
    title: 'The Impact',
  },

];

export default function PostSlider() {
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24">
      {postData.map((item, index) => (
        <Div key={index}>
          <Post
            url={item.url}
            src={item.src}
            alt={item.alt}
            date={item.date}
            title={item.title}
          />
        </Div>
      ))}
    </Slider>
  );
}
