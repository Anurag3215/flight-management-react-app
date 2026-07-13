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
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card shadow">
              <div className="card-header text-center">
                <h3>Add Flight</h3>
              </div>

              <div className="card-body">
                <label className="form-label">Flight Number</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="flight_number"
                  value={input.flight_number}
                  onChange={inputHandler}
                />

                <label className="form-label">Airline</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="airline"
                  value={input.airline}
                  onChange={inputHandler}
                />

                <label className="form-label">Origin</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="origin"
                  value={input.origin}
                  onChange={inputHandler}
                />

                <label className="form-label">Destination</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="destination"
                  value={input.destination}
                  onChange={inputHandler}
                />

                <label className="form-label">Departure Date</label>
                <input
                  type="date"
                  className="form-control mb-3"
                  name="departure_date"
                  value={input.departure_date}
                  onChange={inputHandler}
                />

                <label className="form-label">Departure Time</label>
                <input
                  type="time"
                  className="form-control mb-3"
                  name="departure_time"
                  value={input.departure_time}
                  onChange={inputHandler}
                />

                <label className="form-label">Arrival Time</label>
                <input
                  type="time"
                  className="form-control mb-3"
                  name="arrival_time"
                  value={input.arrival_time}
                  onChange={inputHandler}
                />

                <label className="form-label">Fare</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  name="fare"
                  value={input.fare}
                  onChange={inputHandler}
                />

                <label className="form-label">Total Seats</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  name="total_seats"
                  value={input.total_seats}
                  onChange={inputHandler}
                />

                <label className="form-label">Available Seats</label>
                <input
                  type="number"
                  className="form-control mb-3"
                  name="available_seats"
                  value={input.available_seats}
                  onChange={inputHandler}
                />

                <label className="form-label">Status</label>
                <select
                  className="form-select mb-3"
                  name="status"
                  value={input.status}
                  onChange={inputHandler}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <button
                  className="btn btn-primary w-100"
                  onClick={readValues}
                >
                  Add Flight
                </button>

                {message && (
                  <div
                    className={`mt-3 text-center ${
                      isError ? "text-danger" : "text-success"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFlight;