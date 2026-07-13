import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main className="home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Premium Flight Control</span>
          <h1>Manage your schedules with a sleek, modern cockpit.</h1>
          <p>
            A refined flight management dashboard with graceful navigation,
            intelligent forms, and fast access to every route.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/add">
              Add Flight
            </Link>
            <Link className="btn btn-secondary" to="/view">
              View Flights
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card__top">
              <span>Boarding Pass</span>
              <strong>Ready to take off</strong>
            </div>
            <div className="hero-card__body">
              <div>
                <p>JFK</p>
                <strong>NYC</strong>
              </div>
              <div className="hero-card__route">
                <span>— — —</span>
                <strong>08:30</strong>
                <span>7h 30m</span>
              </div>
              <div>
                <p>LHR</p>
                <strong>LON</strong>
              </div>
            </div>
            <div className="hero-card__footer">
              <span>Flight BZ-421</span>
              <span>Status: On Time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h3>Smart Scheduling</h3>
          <p>Keep flight plans clean, editable, and instantly accessible.</p>
        </article>
        <article className="feature-card">
          <h3>Effortless Forms</h3>
          <p>Submit flight details quickly with a calming, intuitive form layout.</p>
        </article>
        <article className="feature-card">
          <h3>Data at a glance</h3>
          <p>Scan statuses, seats, and routes in a polished table experience.</p>
        </article>
      </section>
    </main>
  )
}

export default HomePage
