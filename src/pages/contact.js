import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
  return (
    <div style={{color: `teal`}}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Header headerText="Contact" />
      <p>For bookings, text or call me on my cell at: 555-555-5555</p>
    </div>
  )
}
