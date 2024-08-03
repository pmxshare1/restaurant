import React from "react";
import HomeBannerContent from "./HomeBannerContent";
const bnr =
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const Banner = () => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `url(${bnr})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HomeBannerContent />
    </div>
  );
};

export default Banner;
