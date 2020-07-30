import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Header headerText="Hey, my name is Harri!" />
      <Header headerText="welcome to my portfolio" />
      <p>I love stick and poke and drawing.</p>
    </div>
  )
}
