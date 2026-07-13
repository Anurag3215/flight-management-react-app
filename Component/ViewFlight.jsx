import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  // Optional filters
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const fetchFlights = () => {
    setLoading(true);

    let url = "https://host-demo-app.onrender.com/api/flights";

    if (origin !== "" || destination !== "") {
      url += `?origin=${origin}&destination=${destination}`;
    }

    axios
      .get(url)
      .then((response) => {
        setFlights(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">View All Flights</h2>

      {/* Bonus Filter */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <button className="btn btn-primary w-100" onClick={fetchFlights}>
            Search
          </button>
        </div>
      </div>

      {loading ? (
        <h3 className="text-center">Loading...</h3>
      ) : (
        <table className="table table-bordered table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>Flight No</th>
              <th>Airline</th>
              <th>Origin</th>
              <th>Destination</th>
              <th>Date</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Fare (₹)</th>
              <th>Available Seats</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id}>
                <td>{flight.flight_number}</td>
                <td>{flight.airline}</td>
                <td>{flight.origin}</td>
                <td>{flight.destination}</td>
                <td>{flight.departure_date}</td>
                <td>{flight.departure_time}</td>
                <td>{flight.arrival_time}</td>
                <td>₹{flight.fare}</td>
                <td>{flight.available_seats}</td>
                <td>{flight.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewFlights;