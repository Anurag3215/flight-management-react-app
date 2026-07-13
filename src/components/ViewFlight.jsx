import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
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
    <main className="page-section page-table">
      <div className="section-header">
        <span className="eyebrow">Flight Overview</span>
        <h1>Search, filter, and inspect the latest flight schedules.</h1>
      </div>

      <div className="filter-panel">
        <input
          type="text"
          className="form-control"
          placeholder="Origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchFlights}>
          Search
        </button>
      </div>

      {loading ? (
        <div className="loading-state">Loading flights…</div>
      ) : (
        <div className="table-card shadow">
          <table className="flights-table">
            <thead>
              <tr>
                <th>Flight</th>
                <th>Airline</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Fare</th>
                <th>Seats</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {flights.length === 0 ? (
                <tr>
                  <td colSpan="10" className="empty-row">
                    No flights found. Try another search.
                  </td>
                </tr>
              ) : (
                flights.map((flight) => (
                  <tr key={flight.id || flight.flight_number}>
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
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};

export default ViewFlights;
