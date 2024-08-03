import React from "react";
import Image from "next/image";

const homeBannerImage =
  "https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const HomeBannerContent = () => {
  return (
    <div className="home-banner-content">
      <section>
        <h1>Little Restaurant</h1>
        <h3>Tema</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim
          cumque numquam ut, qui mollitia. Incidunt sit ullam in cum est
          ratione, aliquid amet fugiat, veritatis soluta fuga numquam quis!
        </p>
        <button type="button" className="btn btn-warning">
          Reserve a Table
        </button>
      </section>
      <section>
        <div className="home-banner-content-image">
          <Image
            src={homeBannerImage}
            height={300}
            width={200}
            alt="Restaurant Image"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeBannerContent;
