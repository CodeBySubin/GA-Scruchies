import React from "react";
import Clips from "./utils/Clips";
import SocialLink from "./utils/SocialLink";
import Slider from "./utils/slider";
const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  // console.log(heroapi)
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-items-center mt-28 md:mt-24">

            {/* <div className="relative w-full overflow-hidden bg-pink-500 my-5">
              <div className="flex whitespace-nowrap animate-marquee">
                <p className="text-white text-lg font-bold mx-4">
                  🎀 New Scrunchies Collection Available! 🎀 Limited Stock –
                  Order Now! 🎀 Free Shipping on All Orders! 🎀
                </p>
                <p className="text-white text-lg font-bold mx-4">
                  🎀 New Scrunchies Collection Available! 🎀 Limited Stock –
                  Order Now! 🎀 Free Shipping on All Orders! 🎀
                </p>
              </div>
            </div> */}




            
            {/* <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{title}</h1> */}
            {/* <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200'>{subtitle}</h1> */}
            {/* <button type='button' className='button-theme bg-slate-200  shadow-slate-200 rounded-xl my-5'>{btntext}</button> */}
            {/* <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[11%] xl:left-0 w-auto h-auto'>
              {videos?.map((val, i) => (
                <Clips
                  key={i}
                  imgsrc={val.imgsrc}
                  clip={val.clip}
                />
              ))}
            </div> */}
            {/* <div className='grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3'>
              {sociallinks?.map((val, i) => (
                <SocialLink
                  key={i}
                  icon={val.icon}
                />
              ))}
            </div> */}
          </div>
          <Slider />
          {/* <div className='flex items-center'>
            <img
              src={img}
              alt='hero-img/img'
              className='w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] object-fill'
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
