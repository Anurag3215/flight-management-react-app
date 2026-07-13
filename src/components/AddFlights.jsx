import React, { useState } from "react";
import axios from "axios";

const AddFlight = () => {
  const [input, setInput] = useState({
    flight_number: "",
    airline: "",
    origin: "",
    destination: "",
    departure_date: "",
    departure_time: "",
    arrival_time: "",
    fare: "",
    total_seats: "",
    available_seats: "",
    status: "Scheduled",
  });

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValues = () => {
    axios
      .post("https://host-demo-app.onrender.com/api/add-flight", input)
      .then((response) => {
        setMessage(response.data.message);
        setIsError(false);
        setInput({
          flight_number: "",
          airline: "",
          origin: "",
          destination: "",
          departure_date: "",
          departure_time: "",
          arrival_time: "",
          fare: "",
          total_seats: "",
          available_seats: "",
          status: "Scheduled",
        });
      })
      .catch((error) => {
        setIsError(true);
        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage("Server not responding");
        }
      });
  };

  return (
    <main className="page-section page-form">
      <div className="section-header">
        <span className="eyebrow">Flight Input</span>
        <h1>Create a new flight record with ease.</h1>
      </div>

      <div className="form-panel">
        <div className="form-grid">
          <label className="form-label">
            Flight Number
            <input
              type="text"
              className="form-control"
              name="flight_number"
              value={input.flight_number}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Airline
            <input
              type="text"
              className="form-control"
              name="airline"
              value={input.airline}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Origin
            <input
              type="text"
              className="form-control"
              name="origin"
              value={input.origin}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Destination
            <input
              type="text"
              className="form-control"
              name="destination"
              value={input.destination}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Departure Date
            <input
              type="date"
              className="form-control"
              name="departure_date"
              value={input.departure_date}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Departure Time
            <input
              type="time"
              className="form-control"
              name="departure_time"
              value={input.departure_time}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Arrival Time
            <input
              type="time"
              className="form-control"
              name="arrival_time"
              value={input.arrival_time}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Fare
            <input
              type="number"
              className="form-control"
              name="fare"
              value={input.fare}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Total Seats
            <input
              type="number"
              className="form-control"
              name="total_seats"
              value={input.total_seats}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Available Seats
            <input
              type="number"
              className="form-control"
              name="available_seats"
              value={input.available_seats}
              onChange={inputHandler}
            />
          </label>

          <label className="form-label">
            Status
            <select
              className="form-select"
              name="status"
              value={input.status}
              onChange={inputHandler}
            >
              <option value="Scheduled">Scheduled</option>
              <option value="On Time">On Time</option>
              <option value="Delayed">Delayed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </label>
        </div>

        <div className="form-actions">
          <button className="btn btn-primary btn-large" onClick={readValues}>
            Add Flight
          </button>
          {message && (
            <div className={`form-message ${isError ? "error" : "success"}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AddFlight;
