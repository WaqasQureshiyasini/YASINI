import SimpleImageSlider from 'react-simple-image-slider'
const images = [
    { url: "/images/1.jpg" },
    { url: "/images/11.jpg" },
    { url: "/images/8.jpg" },
    { url: "/images/9.jpg" },

  ];
  
const Slider = () => {
    return (
        <div>
        <SimpleImageSlider
          width={1349}
          height={384}
          images={images}
          slideDuration={0.5}
          navStyle={1}
          navSize={50}
          showBullets
          showNavs
          useGPURender
        />
      </div>
    )
}

export default Slider;
