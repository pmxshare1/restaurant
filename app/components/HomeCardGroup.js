import React from "react";

const images = [
  "https://images.pexels.com/photos/783153/pexels-photo-783153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg",
  "https://images.pexels.com/photos/1126689/pexels-photo-1126689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const HomeCardGroup = () => {
  return (
    <div className="home-card-group">
      <div className="row g-4">
        <div className="col-sm-6 col-md-4">
          <div className="card h-100 w-100">
            <img src={images[0]} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                eum tempore, ullam minus deleniti aut quaerat perspiciatis
                sapiente quibusdam veritatis possimus dicta, laudantium nobis
                temporibus molestias perferendis, similique qui nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card h-100 w-100">
            <img src={images[1]} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                eum tempore, ullam minus deleniti aut quaerat perspiciatis
                sapiente quibusdam veritatis possimus dicta, laudantium nobis
                temporibus molestias perferendis, similique qui nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card h-100 w-100">
            <img src={images[2]} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                eum tempore, ullam minus deleniti aut quaerat perspiciatis
                sapiente quibusdam veritatis possimus dicta, laudantium nobis
                temporibus molestias perferendis, similique qui nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card h-100 w-100">
            <img src={images[3]} alt="" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                eum tempore, ullam minus deleniti aut quaerat perspiciatis
                sapiente quibusdam veritatis possimus dicta, laudantium nobis
                temporibus molestias perferendis, similique qui nesciunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCardGroup;
