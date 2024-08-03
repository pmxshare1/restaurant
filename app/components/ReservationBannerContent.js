import React from "react";

const ReservationBannerContent = () => {
  return (
    <div className="reservation-form">
      <form>
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="firstname" className="form-label">
                *First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="col">
            <div>
              <label htmlFor="lastname" className="form-label">
                *Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <label htmlFor="email" className="form-label">
                *Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="col">
            <div>
              <label htmlFor="phone" className="form-label">
                *Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
        <div className="row datetime-special-request">
          <div className="col reservation-datetime">
            <div className="date">
              <label htmlFor="date">Reservation Date</label>
              <input type="date" id="date" />
            </div>
            <div className="time">
              <label htmlFor="time">Reservation Time</label>
              <input type="time" id="time" />
            </div>
          </div>
          <div className="col">
            <label for="specialrequest" className="form-label">
              Special Request
            </label>
            <textarea
              className="form-control"
              id="specialrequest"
              rows="3"
              placeholder="Request"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="numberofpeople">Number of People</label>
            <input type="number" id="numberofpeople" />
          </div>
          <div className="col">
            <input
              type="button"
              value="Submit Reservation"
              className="btn btn-secondary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationBannerContent;
