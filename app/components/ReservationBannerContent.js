"use client";
import React, { useState } from "react";

const ReservationBannerContent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [resvDate, setResvDate] = useState(Date.now());
  const [resvTime, setResvTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const reservationObj = {
      firstName,
      lastName,
      phone,
      email,
      request,
      resvDate,
      resvTime,
      numberOfPeople,
    };

    fetch("http://localhost:4400/reservations", {
      method: "POST",
      "Content-Type": "application/json",
      body: JSON.stringify(reservationObj),
    })
      .then((res) => {
        if (res.ok) {
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
          setRequest("");
          setResvDate(Date.now());
          setResvTime("");
          setNumberOfPeople(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="reservation-form">
      <form onSubmit={(evt) => handleFormSubmit(evt)} method="post">
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
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
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
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row datetime-special-request">
          <div className="col reservation-datetime">
            <div className="date">
              <label htmlFor="date">Reservation Date</label>
              <input
                type="date"
                id="date"
                value={resvDate}
                onChange={(e) => setResvDate(e.target.value)}
              />
            </div>
            <div className="time">
              <label htmlFor="time">Reservation Time</label>
              <input
                type="time"
                id="time"
                value={resvTime}
                onChange={(e) => setResvTime(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <label htmlFor="specialrequest" className="form-label">
              Special Request
            </label>
            <textarea
              className="form-control"
              id="specialrequest"
              rows="3"
              placeholder="Request"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="numberofpeople">Number of People</label>
            <input
              type="number"
              id="numberofpeople"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="submit"
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
